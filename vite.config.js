import { defineConfig } from 'vite';

export default defineConfig({
    base: '/wdd330/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                favorites: 'src/Favorites/favorites.html',
                movies: 'src/movies_selected/movies-selected.html'
            }
        }
    }
});
