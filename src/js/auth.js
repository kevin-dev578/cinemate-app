const AUTH_USER_KEY = 'cinemate-auth-user';

export function redirectIfAuthenticated() {
    const savedUser = localStorage.getItem(AUTH_USER_KEY);

    if (savedUser) {
        window.location.href = './app.html';
    }
}

export function saveAuthenticatedUser(user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}