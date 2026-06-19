const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Configure backend URL via Vite env var VITE_AUTH_API_BASE_URL or fallback to placeholder
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL || 'https://YOUR_BACKEND_DOMAIN';

import { redirectIfAuthenticated, setAuthenticatedUser } from './auth.js';

redirectIfAuthenticated();

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
        const response = await fetch(`${AUTH_API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // include cookies for session-based auth
            body: JSON.stringify({
                email: emailInput.value.trim(),
                password: passwordInput.value
            })
        });

        if (response.ok) {
            const user = await response.json();
            setAuthenticatedUser(user);
            window.location.href = './app.html';
        } else {
            const errorText = await response.text();
            window.alert(errorText || 'Login failed. Please check your credentials.');
        }
    } catch (error) {
        window.alert('Error: ' + error.message);
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = 'Login';
    }
});
