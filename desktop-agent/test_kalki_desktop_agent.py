import io
import time
import unittest
from types import SimpleNamespace
from unittest.mock import patch

import kalki_desktop_agent as agent


class HandlerHarness:
    """In-process HTTP handler double; action launches are always mocked."""

    def __init__(self):
        self.server = SimpleNamespace(agent_state=agent.AgentState())
        self.server.agent_state.pair_code = "01234567"
        self.server.agent_state.code_expires_at = time.monotonic() + agent.PAIR_CODE_TTL
        self.headers = {"Origin": agent.ALLOWED_ORIGIN}
        self.responses = []
        self.path = "/"

    def _trusted_origin(self):
        return self.headers.get("Origin", "") == agent.ALLOWED_ORIGIN

    def _host_is_loopback(self):
        return True

    @property
    def state(self):
        return self.server.agent_state

    def _send_json(self, status, payload):
        self.responses.append((status, payload))


class CommandAllowlistTests(unittest.TestCase):
    def test_windows_actions_are_fixed_commands(self):
        self.assertEqual(agent.command_for_action("calculator", "Windows"), ["calc.exe"])
        self.assertEqual(agent.command_for_action("notes", "Windows"), ["notepad.exe"])

    def test_mac_actions_are_fixed_commands(self):
        self.assertEqual(agent.command_for_action("calculator", "Darwin"), ["/usr/bin/open", "-a", "Calculator"])
        self.assertEqual(agent.command_for_action("notes", "Darwin"), ["/usr/bin/open", "-a", "TextEdit"])

    def test_unknown_action_is_rejected(self):
        with self.assertRaises(ValueError):
            agent.command_for_action("run shell", "Windows")
        with self.assertRaises(ValueError):
            agent.launch_app("/tmp/anything")

    def test_launch_never_uses_a_shell(self):
        with patch.object(agent.platform, "system", return_value="Windows"):
            with patch.object(agent.subprocess, "Popen") as popen:
                agent.launch_app("calculator")
        args, kwargs = popen.call_args
        self.assertEqual(args[0], ["calc.exe"])
        self.assertIs(kwargs["shell"], False)

    def test_unknown_os_app_is_unavailable(self):
        with self.assertRaises(ValueError):
            agent.command_for_action("calculator", "Plan9")

    def test_linux_uses_only_known_installed_launchers(self):
        with patch.object(agent.shutil, "which", side_effect=lambda name: "/usr/bin/kcalc" if name == "kcalc" else None):
            self.assertEqual(agent.command_for_action("calculator", "Linux"), ["/usr/bin/kcalc"])


class LocalAgentProtocolTests(unittest.TestCase):
    def setUp(self):
        self.handler = HandlerHarness()

    def pair(self, code="01234567"):
        agent.Handler._pair(self.handler, {"code": code})
        return self.handler.responses[-1]

    def test_origin_and_host_allow_lists_are_exact(self):
        self.handler.headers["Origin"] = agent.ALLOWED_ORIGIN
        self.handler.headers["Host"] = f"127.0.0.1:{agent.PORT}"
        self.assertTrue(agent.Handler._trusted_origin(self.handler))
        self.assertTrue(agent.Handler._host_is_loopback(self.handler))
        self.handler.headers["Host"] = f"localhost:{agent.PORT}"
        self.assertFalse(agent.Handler._host_is_loopback(self.handler))
        self.handler.headers["Origin"] = "https://attacker.example"
        self.assertFalse(agent.Handler._trusted_origin(self.handler))

    def test_wrong_origin_cannot_pair(self):
        self.handler.headers["Origin"] = "https://attacker.example"
        self.handler.path = "/v1/pair"
        agent.Handler.do_POST(self.handler)
        self.assertEqual(self.handler.responses[-1][0], 403)
        self.assertIsNone(self.handler.state.session_token)

    def test_pairing_auth_allowlist_and_disconnect(self):
        status, data = self.pair()
        self.assertEqual(status, 200)
        token = data["token"]

        self.handler.headers.pop("Authorization", None)
        agent.Handler._command(self.handler, {"action": "calculator"})
        self.assertEqual(self.handler.responses[-1][0], 401)

        self.handler.headers["Authorization"] = f"Bearer {token}"
        agent.Handler._command(self.handler, {"action": "run shell"})
        self.assertEqual(self.handler.responses[-1][0], 400)

        with patch.object(agent, "launch_app", return_value="Opened Calculator.") as launch:
            agent.Handler._command(self.handler, {"action": "calculator"})
        self.assertEqual(self.handler.responses[-1][0], 200)
        self.assertEqual(self.handler.responses[-1][1]["message"], "Opened Calculator.")
        launch.assert_called_once_with("calculator")

        with patch("builtins.print"):
            agent.Handler._disconnect(self.handler)
        self.assertEqual(self.handler.responses[-1][0], 200)
        self.assertIsNone(self.handler.state.session_token)
        agent.Handler._command(self.handler, {"action": "calculator"})
        self.assertEqual(self.handler.responses[-1][0], 401)

    def test_request_body_requires_limited_json(self):
        body = b'{"action":"calculator"}'
        self.handler.headers.update({"Content-Type": "application/json", "Content-Length": str(len(body))})
        self.handler.rfile = io.BytesIO(body)
        self.assertEqual(agent.Handler._read_json(self.handler), {"action": "calculator"})
        self.handler.headers["Content-Length"] = str(agent.MAX_BODY_BYTES + 1)
        with self.assertRaises(ValueError):
            agent.Handler._read_json(self.handler)

    def test_pairing_code_is_one_use(self):
        self.assertEqual(self.pair()[0], 200)
        agent.Handler._pair(self.handler, {"code": "01234567"})
        self.assertEqual(self.handler.responses[-1][0], 409)

    def test_pairing_stops_after_five_wrong_attempts(self):
        for _ in range(5):
            agent.Handler._pair(self.handler, {"code": "99999999"})
            self.assertEqual(self.handler.responses[-1][0], 401)
        agent.Handler._pair(self.handler, {"code": "01234567"})
        self.assertEqual(self.handler.responses[-1][0], 410)

    def test_expired_pairing_code_is_rejected(self):
        self.handler.state.code_expires_at = time.monotonic() - 1
        agent.Handler._pair(self.handler, {"code": "01234567"})
        self.assertEqual(self.handler.responses[-1][0], 410)


if __name__ == "__main__":
    unittest.main()
