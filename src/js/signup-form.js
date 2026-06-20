const signupForm = document.getElementById('signup-form');
const signupButton = document.getElementById('signup-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('signup-email');
const passwordInput = document.getElementById('signup-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

import { redirectIfAuthenticated } from './auth.js';

redirectIfAuthenticated();

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!nameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        window.alert('Please fill in all fields.');
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        window.alert('Passwords do not match.');
        return;
    }

    signupButton.disabled = true;
    signupButton.textContent = 'Creating account...';

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        if (response.ok) {
            window.location.href = './index.html';
        } else {
            window.alert('Signup failed. Please try again.');
        }
    } catch (error) {
        window.alert('Error: ' + error.message);
    } finally {
        signupButton.disabled = false;
        signupButton.textContent = 'Create Account';
    }
});