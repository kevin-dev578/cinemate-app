import{n as e}from"./mobile-CteAoepr.js";var t=`0db2b97fda8bdb113cd7fe172fd59810`,n=null;async function r(){if(n)return n;let e=await(await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${t}`)).json();return n={},e.genres.forEach(e=>n[e.id]=e.name),n}function i(t,n={}){let r=document.getElementById(`search-results`),i=document.getElementById(`movie-details`);if(r.innerHTML=``,i.innerHTML=``,!t||t.length===0){r.innerHTML=`
        <div>
            <p>No movies found.</p>
        </div>`;return}t.forEach(t=>{let i=document.createElement(`div`);i.classList.add(`movie-card`);let a=t.release_date?t.release_date.split(`-`)[0]:`N/A`,o=t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:`https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZtZThvZ25sYm5qMDA1OHBmczU4NHJlZnBsMGNyaXgxdG5oOHVzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qHXSYtyW0kANmLLzcG/giphy.gif`,s=(t.genre_ids??[]).map(e=>n[e]||`Unknown`).join(`, `)||`N/A`;i.innerHTML=`
            <h3>${t.title} (${a})</h3>
            <img src="${o}" alt="${t.title} poster" loading="lazy" />
            <p>Genres: ${s}</p>
            <div class="movie-action-btn">
                <button class="watch-trailer-btn">Watch Trailer</button>
                <button class="add-to-favorites" aria-label="Add to Favorites button">
                    <div>
                        <div class="align-svg">
                            <svg viewBox="0 0 24.00 24.00" fill="yellow" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" aria-hidden="true">
                                <g id="SVGRepo_bgCarrier" stroke-width="0" ></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" stroke-width="0.576" stroke-linecap="round" stroke-linejoin="round">
                                </path> 
                                </g>
                            </svg>
                        </div>
                            Add To Favorites
                    </div>
                </button>
            </div>
        `,i.querySelector(`.watch-trailer-btn`).addEventListener(`click`,()=>{window.location.href=`/wdd330/src/movies_selected/movies-selected.html?id=${t.id}&title=${encodeURIComponent(t.title.toLowerCase())}&year=${encodeURIComponent(a)}`}),i.querySelector(`.add-to-favorites`).addEventListener(`click`,()=>{e(t,a,s)}),r.appendChild(i)})}async function a(){let e=document.getElementById(`movie-details`);e.innerHTML=``;try{let n=await r(),a=await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${t}`)).json();if(!a.results||a.results.length===0){e.innerHTML=`<p>No movies found.</p>`;return}i(a.results,n)}catch(e){let t=document.getElementById(`movie-details`);t.innerHTML=`<div class="error-message">
            <p>${e} : Failed to load movies. Please try again.</p>
        </div>`}}var o=`0db2b97fda8bdb113cd7fe172fd59810`;async function s(e){try{let t=await r();i((await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${o}&query=${encodeURIComponent(e)}`)).json()).results,t)}catch(e){console.error(`Error fetching movies:`,e)}}function c(){let e=document.querySelector(`#search-btn`),t=document.getElementById(`search-input`);e.addEventListener(`click`,()=>{let e=t.value.trim();e&&s(e)}),t.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let e=t.value.trim();e&&s(e)}})}export{r as i,a as n,i as r,c as t};