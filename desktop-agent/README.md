# KALKI Desktop Companion

An original, small local companion for the user-owned KALKI app. It does not copy code from the Mark XXXIX-OR reference project. The companion exposes only three fixed, allow-listed actions: open Calculator, open the computer's text editor (Notes/Notepad), or open a blank browser tab.

## Requirements and start-up

- Python 3.10 or later; there are no third-party Python dependencies.
- Run this on the same computer that is displaying KALKI in the browser. A companion running on a different computer cannot control the browser's computer.
- From the repository root, run:

```bash
python3 desktop-agent/kalki_desktop_agent.py
```

On Windows, this may be:

```powershell
python desktop-agent/kalki_desktop_agent.py
```

Keep the terminal open. It prints an 8-digit pairing code valid for five minutes and one use. In KALKI, open **Settings → Desktop companion**, enter that code, and choose **Pair this desktop**. If the browser asks to allow local-network access, allow it only if you want this feature on this computer.

Then ask KALKI for a supported action, for example “open calculator”, “open notes”, or “open browser”. KALKI displays an approval card; nothing opens unless you click **Approve & open**. If you make a request before pairing, pair in Settings and then approve the pending card. **Disconnect** revokes the page's current pairing and prints a fresh code in the agent terminal. Closing the terminal stops the companion. If you close the browser tab without disconnecting, restart the agent to reset the pairing.

You can run the local tests from the repository root with:

```bash
python3 -m unittest discover -s desktop-agent -p 'test_*.py' -v
```

## Safety and limits

- The server binds only to `127.0.0.1:43187`, and browser requests are accepted only from the exact origin `https://vamshi-vfx.github.io`.
- Pairing uses a random one-time code with a five-minute expiry and a five-attempt limit. The resulting session token is held only in the current page's memory, not browser storage.
- The agent accepts only the fixed action IDs `calculator`, `notes`, and `browser`; it does not accept shell text, arbitrary commands, file paths, or user-supplied URLs.
- It does not provide terminal execution, file browsing/editing, screenshots, camera access, or remote access.
- The TTS feature is separate and uses the browser/device's built-in speech voices. Automatic reading is off by default and can be enabled in Settings; per-reply reading is user-triggered. No audio is sent to KALKI's server.

This is a local prototype. Use it only on a computer and browser you control. If the KALKI site origin changes, update the exact allow-list in the agent before pairing.
