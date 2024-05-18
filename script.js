const output = document.getElementById('output');
const input = document.getElementById('input');

// Initial welcome message
output.innerHTML += '<p>Welcome to the Matrix...</p>';

// Function to generate fake code snippet
function generateCodeSnippet() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * 50) + 20; // Random length between 20 and 70 characters
    let code = '';
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

// Function to handle key press events
function handleKeyPress(event) {
    const key = event.key;
    output.innerHTML += key;
}

// Attach key press event listener
input.addEventListener('keydown', handleKeyPress);
