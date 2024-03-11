let btnNav = document.querySelector("#btnMov");
let navMov = document.querySelector(".nav__movil");
let cerrBtnNav = document.querySelector("#cerrarBtnMov");
let navMovLinks = document.querySelectorAll(".movil__links > a");
let formTexfile=document.getElementById('cotizar');

// Función para abrir y cerrar el nav movil

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

// Función para cotizar 

let urlWhat=[];

formTexfile.addEventListener('submit', (event)=>{
    event.preventDefault();

    let inputs = document.querySelectorAll("input");

    inputs.forEach(function(input) {
        urlWhat.push(input.value)
    });

      //573244800000
    let message = encodeURIComponent(`Hola *YouLocker*\nQuiero cotizar el envío de mi paquetería\nPeso: ${urlWhat[0]}\nDetalles: ${urlWhat[1]}\nEmail: ${urlWhat[2]}`);
    
    window.location.href = `https://wa.me/573244800000?text=${message}`;
})