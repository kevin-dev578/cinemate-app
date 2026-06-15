import { fetchMovies } from "./FetchMovies.mjs";

export default function searchBar() {
    const searchBtn = document.querySelector("#search-btn");
    const searchInput = document.getElementById("search-input");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) fetchMovies(query);
    });

   
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) fetchMovies(query);
        }
    });
}
