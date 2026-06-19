import searchBar from "./SearchBar.mjs";
import { displayGlobalMovies } from "./DisplayMovies.mjs";
import { initializeFilter } from "./filter.mjs";
import { getGenreMap } from "./DisplayMovies.mjs";
import { lastModified } from "./lastModified.mjs";

const tmdbKey = import.meta.env.VITE_TMDB_KEY;

document.addEventListener("DOMContentLoaded", async () => {
  searchBar();

  const genreMap = await getGenreMap();

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}`,
  );
  const data = await response.json();

  displayGlobalMovies(data.results, genreMap);
  initializeFilter(data.results, genreMap);
  lastModified();
});
