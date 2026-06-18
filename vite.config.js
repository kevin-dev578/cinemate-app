import { defineConfig } from 'vite';

export default defineConfig({
    base: '/wdd330/',
    server: {
        proxy: {
            '/api': {
                target: 'https://cinemate-backend-ttpg.onrender.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                app: 'app.html',
                favorites: 'src/Favorites/favorites.html',
                movies: 'src/movies_selected/movies-selected.html'
            }
        }
    }
});
