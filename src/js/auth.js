const AUTH_STORAGE_KEY = 'cinemate-auth-user';

export function setAuthenticatedUser(user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

export function getAuthenticatedUser() {
    const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!storedUser) {
        return null;
    }

    try {
        return JSON.parse(storedUser);
    } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        return null;
    }
}

export function clearAuthenticatedUser() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function requireAuth(redirectTo = 'index.html') {
    const authenticatedUser = getAuthenticatedUser();

    if (!authenticatedUser) {
        window.location.replace(redirectTo);
        return null;
    }

    return authenticatedUser;
}

export function redirectIfAuthenticated(redirectTo = 'app.html') {
    const authenticatedUser = getAuthenticatedUser();

    if (authenticatedUser) {
        window.location.replace(redirectTo);
        return true;
    }

    return false;
}