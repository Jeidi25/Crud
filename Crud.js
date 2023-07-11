const modal = document.querySelector(".modal")
const buttonSalir = modal.querySelector(".Salir")
buttonSalir.addEventListener("click", ()=>{
    modal.classList.add("oculto")
})

const botonAgregar = document.querySelector (".botonAgregar")
botonAgregar.addEventListener("click", ()=>{
    modal.classList.remove("oculto")
})

