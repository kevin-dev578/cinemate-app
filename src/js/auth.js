const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

// Store token in memory (not localStorage, not a cookie)
let authToken = null;

export function setToken(token) {
    authToken = token;
}

export function getToken() {
    return authToken;
}

export async function checkAuth() {
    if (!authToken) return null;

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/me`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        const data = await response.json();
        return data.loggedIn ? data.user : null;
    } catch (error) {
        return null;
    }
}

export async function redirectIfAuthenticated() {
    const user = await checkAuth();
    if (user) {
        window.location.href = `${import.meta.env.BASE_URL}app.html`;
    }
}

export async function redirectIfNotAuthenticated() {
    const user = await checkAuth();
    if (!user) {
        window.location.href = `${import.meta.env.BASE_URL}index.html`;
    }
}