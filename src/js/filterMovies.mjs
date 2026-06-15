import { displaySearchResults } from "./DisplayMovies.mjs";

export function applyFilters(movies, genreMap) {
    const genreValue = document.getElementById("filter-genre").value;
    const yearValue = document.getElementById("filter-year").value;
    const sortValue = document.getElementById("filter-sort").value;
    const ratingValue = parseFloat(document.getElementById("filter-rating").value);

    let filtered = [...movies];

    if (genreValue) {
        filtered = filtered.filter(movie =>
            movie.genre_ids.includes(parseInt(genreValue))
        );
    }

    if (yearValue) {
        if (yearValue === "older") {
            filtered = filtered.filter(movie =>
                new Date(movie.release_date).getFullYear() < 2020
            );
        } else {
            filtered = filtered.filter(movie =>
                movie.release_date?.startsWith(yearValue)
            );
        }
    }

    if (ratingValue > 0) {
        filtered = filtered.filter(movie =>
            movie.vote_average >= ratingValue
        );
    }

    if (sortValue === "rating-desc") {
        filtered.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortValue === "year-desc") {
        filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    } else if (sortValue === "year-asc") {
        filtered.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    } else if (sortValue === "title-asc") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "title-desc") {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    displaySearchResults(filtered, genreMap);
}