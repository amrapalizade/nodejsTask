async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send a request to your Node.js server for login authentication
    // Example: Use fetch or XMLHttpRequest to send a POST request to your server
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    // Handle the response (e.g., redirect on success)
    const result = await response.json();
    alert(result.message);
}

async function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Send a request to your Node.js server for signup
    // Example: Use fetch or XMLHttpRequest to send a POST request to your server
    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    // Handle the response (e.g., redirect on success)
    const result = await response.json();
    alert(result.message);
}
