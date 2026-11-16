
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JARVIS AI Assistant</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">

        <h1>J.A.R.V.I.S</h1>
        <p class="subtitle">JUST A RATHER VERY INTELLIGENT SYSTEM</p>

        <div class="reactor">
            <div class="reactor-inner">
                <span>J</span>
            </div>
        </div>

        <h2 id="status">SYSTEM ONLINE</h2>

        <p id="response">
            Hello Sir, I am Jarvis.
        </p>

        <button id="startBtn" onclick="startJarvis()">
            🎙 ACTIVATE JARVIS
        </button>

        <div class="input-area">
            <input
                type="text"
                id="userInput"
                placeholder="Talk to Jarvis..."
            >
            <button onclick="sendMessage()">SEND</button>
        </div>

        <p class="footer">POWERED BY JARVIS AI</p>

    </div>

    <script src="script.js"></script>

</body>
</html>
