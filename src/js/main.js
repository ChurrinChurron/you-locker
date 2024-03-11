let btnNav = document.querySelector("#btnMov");
let navMov = document.querySelector(".nav__movil");
let cerrBtnNav = document.querySelector("#cerrarBtnMov");
let navMovLinks = document.querySelectorAll(".movil__links > a");

btnNav.addEventListener("click", () => {
    navMov.classList.add("abrir");
})

cerrBtnNav.addEventListener("click", () => {
    navMov.classList.remove("abrir");
})

navMovLinks.forEach(links => {

    links.addEventListener("click", () => {

        navMov.classList.remove("abrir");
    })
})