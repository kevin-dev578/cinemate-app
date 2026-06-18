import { renderFavourites } from "./MoviesByCategory.js";
import { lastModified } from "./lastModified.mjs";
import { requireAuth } from "./auth.js";

requireAuth();

renderFavourites();
lastModified();
