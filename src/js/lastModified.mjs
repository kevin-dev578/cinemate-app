export function lastModified(){
    const lastEdited = document.getElementById("lastModified");
    lastEdited.textContent = new Date().toLocaleDateString();
}