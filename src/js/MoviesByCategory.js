class Movie {
  constructor(title, year, genres, rating) {
    this.title = title;
    this.year = year;
    this.genres = genres;
    this.rating = rating;
  }
}

export function addToFavourites(movie, year, genres) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const favMovie = new Movie(movie.title, year, genres, movie.vote_average);

  const exists = favorites.some(
    (f) => f.title === favMovie.title && f.year === favMovie.year,
  );
  if (!exists) {
    favorites.push(favMovie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  window.location.href = "/wdd330/src/Favorites/favorites.html";
}

export function renderFavourites() {
  const list = document.getElementById("favorites-list");
  if (!list) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    list.innerHTML = "<li>No favourites yet.</li>";
    return;
  }

  list.innerHTML = "";
  favorites.forEach((movie, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
            <div>
              <strong>${movie.title}</strong> (${movie.year})
              <span>Genres: ${movie.genres}</span>
              <span>Rating: ${movie.rating ?? "N/A"}</span>
            </div>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
    list.appendChild(item);
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = Number(e.target.dataset.index);
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavourites();
    }
  });
}
