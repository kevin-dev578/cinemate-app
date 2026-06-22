import { redirectIfAuthenticated, setToken } from './auth.js';

const signupForm = document.getElementById('signup-form');
const signupButton = document.getElementById('signup-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('signup-email');
const passwordInput = document.getElementById('signup-password');
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

await redirectIfAuthenticated();

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        window.alert('Please fill in all fields.');
        return;
    }

    signupButton.disabled = true;
    signupButton.textContent = 'Creating account...';

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        const data = await response.json();

        if (response.ok) {
            setToken(data.token);
            window.location.href = `${import.meta.env.BASE_URL}app.html`;
        } else {
            window.alert(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        window.alert('Error: ' + error.message);
    } finally {
        signupButton.disabled = false;
        signupButton.textContent = 'Create Account';
    }
});