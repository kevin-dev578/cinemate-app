const signupForm = document.getElementById('signup-form');
const signupButton = document.getElementById('signup-button');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('form-message');
const AUTH_API_BASE_URL = '/api';
import { redirectIfAuthenticated } from './auth.js';

redirectIfAuthenticated();

function setMessage(text, type = '') {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`.trim();
}

function getTrimmedValue(input) {
    return input.value.trim();
}

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = getTrimmedValue(usernameInput);
    const email = getTrimmedValue(emailInput);
    const password = passwordInput.value;

    if (!username || !email || !password) {
        setMessage('Please complete username, email, and password.', 'error');
        return;
    }

    if (username.length < 3) {
        setMessage('Username must be at least 3 characters long.', 'error');
        return;
    }

    if (password.length < 8) {
        setMessage('Password must be at least 8 characters long.', 'error');
        return;
    }

    signupButton.disabled = true;
    signupButton.textContent = 'Creating account...';
    setMessage('Creating your account...', '');

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Signup request failed.');
        }

        localStorage.setItem('cinemate-account', JSON.stringify({
            username,
            email
        }));

        setMessage('Account created successfully. Redirecting to login...', 'success');

        window.setTimeout(() => {
            window.location.href = 'index.html';
        }, 1200);
    } catch (error) {
        setMessage(`Could not create account: ${error.message}`, 'error');
    } finally {
        signupButton.disabled = false;
        signupButton.textContent = 'Create account';
    }
});