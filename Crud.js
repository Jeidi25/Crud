const modal = document.querySelector(".modal")
const lista = []
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
    guadarDatos()
    modal.classList.add("oculto")
})

function guadarDatos(){
    const Nombre = document.querySelector("#inputNombre").value
    const Apellido = document.querySelector("#inputApellido").value
    const Email = document.querySelector("#inputEmail").value
    const Tipo = document.querySelector("#inputTipo").value

    if(Nombre.trim() == "" ) alert("El nombre no puede estar vacio")
    if(Nombre.trim() == "" ) alert("El nombre no puede estar vacio")
    if(Nombre.trim() == "" ) alert("El nombre no puede estar vacio")
    if(Nombre.trim() == "" ) alert("El nombre no puede estar vacio")

    const camposValidos = [Nombre, Apellido, Email, Tipo].every(x => x.trim() !== "")
    if(!camposValidos) alert("Los campos no son validos")

    lista.push({
        Nombre: Nombre, 
        Apellido: Apellido,
        Email : Email,
        Tipo : Tipo,
     
    })
    console.log(lista)
    actualizarTabla()
}

function actualizarTabla() {
    const tablaBody = document.querySelector(".tabla tbody")
    let tableBodyContenido = ""
    for(let i = 0; i<lista.length; i++){
        tableBodyContenido += ` 
        <tr>
            <td>${lista[i].Nombre}</td>
            <td>${lista [i].Apellido}</td>
            <td>${lista[i].Email}</td>
            <td>${lista[i].Tipo}</td>
            <td>    
                <button class="fa fa-trash"></button>
            </td>
        </tr>
        `
    }

    tablaBody.innerHTML = tableBodyContenido



}


