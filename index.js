let menu = document.getElementById("menu")
let menuNav = document.getElementById("menuNav")

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times")
    menuNav.classList.toggle("none")
})