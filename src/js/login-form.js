const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!(emailInput.value && passwordInput.value)) {
        window.alert('Please fill in all fields.');
        return;
    }

    // Disable button during submission
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    try {
        // Ready for backend: Add actual API call here
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // this is important for sending JSON data
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        if (response.ok) {
            // Success - redirect to main app
            window.location.href = './app.html';
        } else {
            window.alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        window.alert('Error: ' + error.message);
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = 'Login';
    }
});