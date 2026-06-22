import { redirectIfAuthenticated, setToken } from './auth.js';

const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

await redirectIfAuthenticated();

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!(emailInput.value && passwordInput.value)) {
        window.alert('Please fill in all fields.');
        return;
    }

    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        const data = await response.json();

        if (response.ok) {
            setToken(data.token);
            window.location.href = `${import.meta.env.BASE_URL}app.html`;
        } else {
            window.alert(data.message || 'Login failed. Please check your credentials.');
        }
    } catch (error) {
        window.alert('Error: ' + error.message);
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = 'Login';
    }
});