# Final Plan



🔑 LocalStorage Ideas for Your App
Favorites / Watchlist

When a user clicks “Add to Favorites,” save the movie’s ID or title in localStorage.

Example:

javascript
function saveFavorite(movie) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(movie);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
Last Search

Store the last searched movie title so when the user reloads the page, it auto-fills the search bar.

Example:

javascript
localStorage.setItem("lastSearch", searchTerm);
User Preferences

Save things like preferred genre filters or dark/light theme.

Example:

javascript
localStorage.setItem("theme",








🎬 Core Movie Functions
fetchMovieDetails(movieId)

Calls OMDb/TMDb API to get metadata (title, year, genre, cast, plot, ratings).

Normalizes the response into your app’s schema.

searchMovies(query)

Handles keyword search across OMDb/TMDb.

Returns a list of matching movies with pagination support.

fetchTrailer(movieId)

Uses YouTube Data API to retrieve the official trailer.

Embeds the video player in your app.

getPopularMovies()

Fetches trending or top-rated movies from TMDb.

Useful for a “Featured” or “Discover” section.

🛠️ User Interaction Functions
addToFavorites(movieId)

Saves a movie to the user’s favorites list (local storage or backend).

Ensures persistence across sessions.

removeFromFavorites(movieId)

Opposite of above — keeps the list clean and manageable.

renderMovieCard(movie)

Builds a reusable UI component for displaying movie info (poster, title, rating).

Keeps your frontend consistent.

showAlertMessage(type, message)

Integrates with your alertMessage utility for polished error/success banners.

Example: “Movie added to favorites!” or “Trailer not found.”

⚙️ Utility & Validation Functions
normalizeApiResponse(apiData)

Cleans and maps API fields into your app’s schema (e.g., release_date → year).

Prevents “undefined” or “NaN” errors downstream.

validateSearchInput(query)

Ensures user input is safe (no empty strings, trims whitespace).

Guards against unnecessary API calls.

🚀 Optional Extras (if you want to stretch to 10+)
filterMoviesByGenre(genre) → lets users browse by category.

sortMovies(criteria) → sort by rating, release date, popularity.

renderSuccessPage(orderData) → ties into your checkout flow polish, showing totals and mapped items correctly.