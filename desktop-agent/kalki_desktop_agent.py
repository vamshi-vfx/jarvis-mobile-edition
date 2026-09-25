#!/usr/bin/env python3
"""KALKI's local, allow-listed desktop companion. Standard library only."""
from __future__ import annotations

import hmac
import json
import os
import platform
import secrets
import shutil
import subprocess
import sys
import threading
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

HOST = "127.0.0.1"
PORT = 43187
ALLOWED_ORIGIN = "https://vamshi-vfx.github.io"
PAIR_CODE_TTL = 300
MAX_BODY_BYTES = 4096
ALLOWED_ACTIONS = {"calculator", "notes", "browser"}


def command_for_action(action: str, system: str | None = None) -> list[str] | None:
    """Return a fixed argv for an approved app; never accepts shell text or paths."""
    system = system or platform.system()
    if action == "calculator":
        if system == "Windows":
            return ["calc.exe"]
        if system == "Darwin":
            return ["/usr/bin/open", "-a", "Calculator"]
        if system == "Linux":
            for name in ("gnome-calculator", "kcalc", "galculator"):
                path = shutil.which(name)
                if path:
                    return [path]
    elif action == "notes":
        if system == "Windows":
            return ["notepad.exe"]
        if system == "Darwin":
            return ["/usr/bin/open", "-a", "TextEdit"]
        if system == "Linux":
            for name in ("gedit", "gnome-text-editor", "mousepad", "kate"):
                path = shutil.which(name)
                if path:
                    return [path]
    elif action == "browser":
        return None  # handled with the fixed about:blank URL by webbrowser
    raise ValueError("That desktop action is not supported on this computer.")


def launch_app(action: str) -> str:
    if action not in ALLOWED_ACTIONS:
        raise ValueError("That desktop action is not allowed.")
    if action == "browser":
        if webbrowser.open_new("about:blank"):
            return "Opened a blank tab in your default browser."
        raise RuntimeError("Could not open the default browser.")

    argv = command_for_action(action)
    if not argv:
        raise RuntimeError("That app is not available on this computer.")
    kwargs: dict[str, Any] = {
        "stdin": subprocess.DEVNULL,
        "stdout": subprocess.DEVNULL,
        "stderr": subprocess.DEVNULL,
        "shell": False,
        "close_fds": True,
    }
    if os.name != "nt":
        kwargs["start_new_session"] = True
    subprocess.Popen(argv, **kwargs)
    return {"calculator": "Opened Calculator.", "notes": "Opened the text editor."}[action]


class AgentState:
    def __init__(self) -> None:
        self.pair_code = f"{secrets.randbelow(100_000_000):08d}"
        self.code_expires_at = time.monotonic() + PAIR_CODE_TTL
        self.pair_attempts = 0
        self.session_token: str | None = None
        self.lock = threading.Lock()

    def reset_pairing(self) -> str:
        self.pair_code = f"{secrets.randbelow(100_000_000):08d}"
        self.code_expires_at = time.monotonic() + PAIR_CODE_TTL
        self.pair_attempts = 0
        self.session_token = None
        return self.pair_code


class Handler(BaseHTTPRequestHandler):
    server_version = "KALKI-Desktop-Agent"
    sys_version = ""

    @property
    def state(self) -> AgentState:
        return self.server.agent_state  # type: ignore[attr-defined]

    def log_message(self, _format: str, *_args: Any) -> None:
        # Do not log request bodies, pairing codes, or bearer tokens.
        return

    def _trusted_origin(self) -> bool:
        return self.headers.get("Origin", "") == ALLOWED_ORIGIN

    def _cors_headers(self) -> dict[str, str]:
        return {
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Authorization, Content-Type",
            "Access-Control-Allow-Private-Network": "true",
            "Vary": "Origin",
            "Cache-Control": "no-store",
        }

    def _send_json(self, status: int, payload: dict[str, Any]) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        for key, value in self._cors_headers().items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict[str, Any]:
        if self.headers.get("Content-Type", "").split(";", 1)[0].strip().lower() != "application/json":
            raise ValueError("JSON requests only.")
        length = int(self.headers.get("Content-Length", "0"))
        if length < 0 or length > MAX_BODY_BYTES:
            raise ValueError("Request is too large.")
        raw = self.rfile.read(length)
        data = json.loads(raw.decode("utf-8") or "{}")
        if not isinstance(data, dict):
            raise ValueError("Invalid request.")
        return data

    def _host_is_loopback(self) -> bool:
        return self.headers.get("Host", "").lower() == f"127.0.0.1:{PORT}"

    def do_OPTIONS(self) -> None:  # noqa: N802
        if not self._trusted_origin() or not self._host_is_loopback():
            self.send_error(403)
            return
        self.send_response(204)
        for key, value in self._cors_headers().items():
            self.send_header(key, value)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self) -> None:  # noqa: N802
        if not self._trusted_origin() or not self._host_is_loopback():
            self._send_json(403, {"ok": False, "message": "Origin is not allowed."})
            return
        if self.path != "/v1/health":
            self._send_json(404, {"ok": False, "message": "Not found."})
            return
        self._send_json(200, {"ok": True, "paired": bool(self.state.session_token)})

    def do_POST(self) -> None:  # noqa: N802
        if not self._trusted_origin() or not self._host_is_loopback():
            self._send_json(403, {"ok": False, "message": "Origin is not allowed."})
            return
        try:
            body = self._read_json()
        except (ValueError, UnicodeDecodeError, json.JSONDecodeError):
            self._send_json(400, {"ok": False, "message": "Invalid request."})
            return

        if self.path == "/v1/pair":
            self._pair(body)
        elif self.path == "/v1/command":
            self._command(body)
        elif self.path == "/v1/disconnect":
            self._disconnect()
        else:
            self._send_json(404, {"ok": False, "message": "Not found."})

    def _pair(self, body: dict[str, Any]) -> None:
        code = str(body.get("code", ""))
        with self.state.lock:
            if self.state.session_token:
                self._send_json(409, {"ok": False, "message": "This agent is already paired. Restart it to pair again."})
                return
            if time.monotonic() > self.state.code_expires_at or self.state.pair_attempts >= 5:
                self._send_json(410, {"ok": False, "message": "Pairing code expired. Restart the desktop agent for a new code."})
                return
            self.state.pair_attempts += 1
            if not hmac.compare_digest(code, self.state.pair_code):
                self._send_json(401, {"ok": False, "message": "Pairing code did not match."})
                return
            self.state.pair_code = ""
            self.state.session_token = secrets.token_urlsafe(32)
            self._send_json(200, {"ok": True, "token": self.state.session_token, "message": "Desktop paired for this browser session."})

    def _disconnect(self) -> None:
        auth = self.headers.get("Authorization", "")
        supplied = auth[7:] if auth.startswith("Bearer ") else ""
        with self.state.lock:
            expected = self.state.session_token or ""
            if not expected or not hmac.compare_digest(supplied, expected):
                self._send_json(401, {"ok": False, "message": "This browser session is not paired."})
                return
            new_code = self.state.reset_pairing()
        print(f"New KALKI pairing code (valid 5 minutes, one use): {new_code}", flush=True)
        self._send_json(200, {"ok": True, "message": "Disconnected. A new pairing code was printed in the desktop agent terminal."})

    def _command(self, body: dict[str, Any]) -> None:
        auth = self.headers.get("Authorization", "")
        supplied = auth[7:] if auth.startswith("Bearer ") else ""
        action = body.get("action")
        if not isinstance(action, str) or action not in ALLOWED_ACTIONS:
            self._send_json(400, {"ok": False, "message": "Only approved desktop actions are available."})
            return
        # Serialize launch with disconnect so a command cannot pass the auth check
        # immediately before another request revokes the pairing.
        with self.state.lock:
            expected = self.state.session_token or ""
            if not expected or not hmac.compare_digest(supplied, expected):
                self._send_json(401, {"ok": False, "message": "Pair this desktop again in KALKI Settings."})
                return
            try:
                result = launch_app(action)
            except (RuntimeError, ValueError, OSError) as exc:
                self._send_json(400, {"ok": False, "message": str(exc)})
                return
        self._send_json(200, {"ok": True, "message": result, "action": action})


def main() -> None:
    state = AgentState()
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    server.agent_state = state  # type: ignore[attr-defined]
    print("KALKI desktop agent listening on http://127.0.0.1:43187")
    print(f"Pairing code (valid for 5 minutes, one use): {state.pair_code}")
    print("Only Calculator, text editor, and blank browser tab are enabled. Ctrl+C stops the agent.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nKALKI desktop agent stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
