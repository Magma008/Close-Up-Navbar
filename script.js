const button = document.querySelector(".button")
const navbar = document.querySelector(".navbar")
const start = document.querySelector(".start")
const middle = document.querySelector(".middle")
const end = document.querySelector(".end")

button.addEventListener("click", () => {
    navbar.classList.toggle("close")
    start.classList.toggle("st")
    middle.classList.toggle("md")
    end.classList.toggle("ed")
    button.classList.toggle("rotate")
})