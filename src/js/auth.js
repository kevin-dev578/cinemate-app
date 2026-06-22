const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;
const TOKEN_KEY = 'cinemate_token';

export function setToken(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
    sessionStorage.removeItem(TOKEN_KEY);
}

export async function checkAuth() {
    const token = getToken();
    if (!token) return null;

    try {
        const response = await fetch(`${AUTH_API_BASE_URL}/me`, {
            headers: {
                'Authorization': `Bearer ${token}`
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