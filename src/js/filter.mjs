import { applyFilters } from "./filterMovies.mjs";

export function initializeFilter(movies, genreMap) {
    try {
        const filterBtn = document.getElementById("filter-btn");
        const filterPanel = document.getElementById("filter-trigger");
        const clearBtn = document.getElementById("clear-filters");
        const applyFiltersBtn = document.getElementById("apply-filters");
        const ratingInput = document.getElementById("filter-rating");
        const ratingDisplay = document.getElementById("rating-display");

        if (filterBtn && filterPanel) {
            filterBtn.addEventListener("click", () => {
                const masterContainer = document.getElementById("master-container");
                masterContainer.classList.toggle("open");
                filterPanel.classList.toggle("open");
            });
        }

        if (ratingInput && ratingDisplay) {
            ratingInput.addEventListener("input", () => {
                ratingDisplay.textContent = ratingInput.value;
            });
        }

        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener("click", () => {
                applyFilters(movies, genreMap);
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                document.getElementById("filter-genre").value = "";
                document.getElementById("filter-year").value = "";
                document.getElementById("filter-sort").value = "";

                ratingInput.value = 0;
                ratingDisplay.textContent = "0";

                applyFilters(movies, genreMap);
            });
        }
    } catch (error) {
        console.error("Filter init error:", error);
    }
}