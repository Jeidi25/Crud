const modal = document.querySelector(".modal")
const buttonSalir = modal.querySelector(".Salir")
buttonSalir.addEventListener("click", ()=>{
    modal.classList.add("oculto")
})

const botonAgregar = document.querySelector (".botonAgregar")
botonAgregar.addEventListener("click", ()=>{
    modal.classList.remove("oculto")
})

const Guardar = document.querySelector(".Guardar")
Guardar.addEventListener("click",()=>{
    modal.classList.add("oculto")
})
function Datos (Nombre, Apellido, Email, Tipo){

    this.Nombre = Nombre
    this.Apellido = Apellido
    this.Email = Email
    this.Tipo = Tipo

    const Date = [];

    function obtenerNombre (){

    }

    const Datos = document.querySelector (".Nombre")
    obtenerNombre = parseInt (obtenerNombre);

    return obtenerNombre;
}




