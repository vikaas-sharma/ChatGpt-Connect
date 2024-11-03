async function sendPrompt() {
    const prompt = document.getElementById('prompt').value;
    const responseContainer = document.getElementById('responseContainer');

    // Clear previous response
    responseContainer.textContent = "Loading...";

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.text();
        responseContainer.textContent = data;
    } catch (error) {
        console.error('Error:', error);
        responseContainer.textContent = "An error occurred. Please try again.";
    }
}

async function sendPrompt() {
    const prompt = document.getElementById('prompt').value;
    const responseContainer = document.getElementById('responseContainer');

    // Clear previous response
    responseContainer.textContent = "Loading...";

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.text();
        responseContainer.textContent = data;
    } catch (error) {
        console.error('Error:', error);
        responseContainer.textContent = "An error occurred. Please try again.";
    }
}

function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Voice recognition is not supported in this browser. Try Chrome.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const listeningIndicator = document.getElementById('listeningIndicator');

    recognition.onstart = () => {
        console.log("Voice recognition started. Speak now.");
        listeningIndicator.classList.remove('hidden'); // Show indicator
    };

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        document.getElementById('prompt').value = speechResult;
        console.log("Speech recognized: ", speechResult);
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
        console.log("Voice recognition ended.");
        listeningIndicator.classList.add('hidden'); // Hide indicator
    };

    recognition.start();
}
