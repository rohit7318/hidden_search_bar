const searchButton = document.querySelector(".btn")
const input = document.querySelector(".input");
const searchDiv = document.querySelector(".search");


searchButton.addEventListener("click",()=>{
    searchDiv.classList.toggle("active");
    input.focus();
})