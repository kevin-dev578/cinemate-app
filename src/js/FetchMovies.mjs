import { displaySearchResults, getGenreMap } from "./DisplayMovies.mjs";

const tmdbKey = import.meta.env.VITE_TMDB_KEY;

export async function fetchMovies(query) {
    try {
        const genreMap = await getGenreMap();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        displaySearchResults(data.results, genreMap);

    } catch (err) {
        console.error("Error fetching movies:", err);
    }
}
