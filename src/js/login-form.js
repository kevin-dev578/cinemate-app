const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;
import { redirectIfAuthenticated } from './auth.js';

redirectIfAuthenticated();

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!(emailInput.value && passwordInput.value)) {
        window.alert('Please fill in all fields.');
        return;
    }

    // Disable button during submission
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;

    try {
        // Ready for backend: Add actual API call here
        const response = await fetch(`${AUTH_API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // include cookies for session-based auth
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
