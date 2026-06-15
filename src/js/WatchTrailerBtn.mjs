import { displayTrailer } from "./FetchTrailer.mjs"

export function buttonAction(){
    document.getElementById("watch-trailer").addEventListener("click", () =>{
        displayTrailer();
    })
}