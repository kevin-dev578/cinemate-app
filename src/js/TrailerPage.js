import { displayTrailer } from "./FetchTrailer.mjs";
import searchBar from "./SearchBar.mjs";
import { lastModified } from "./lastModified.mjs";

searchBar();
lastModified();

const params = new URLSearchParams(window.location.search);
const movieTitle = params.get("title");
const movieYear = params.get("year");
const movieId = params.get("id");

if (movieTitle) {
  displayTrailer(movieTitle, movieYear, movieId);
} else {
  document.getElementById("movie-details").innerHTML =
    "<p>No movie selected.</p>";
}
