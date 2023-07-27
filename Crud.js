const modal = document.querySelector(".modal")
const lista = []
const buttonSalir = modal.querySelector(".Salir")
const imagenPerfil = document.querySelector('#imagen-perfil')


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
    const ImagenSrc = imagenPerfil.src

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
        Img: ImagenSrc,
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
            <td><img class="imagen-columna" src="${lista[i].Img}"/></td>
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

const fileinput = document.querySelector("#file-input");
const Img = document.querySelector(".Img");

const loadImage = ()=>{
    let file = fileinput.files[0];
    console.log(file);

    if (file) {
      const src = URL.createObjectURL(file);
      imagenPerfil.src = src;

    } else {
      imagenPerfil.src = '';
    }
}


console.log(fileinput);

fileinput.addEventListener("change", loadImage);

imagenPerfil.addEventListener("click", () => {
    fileinput.click()
})

const buttonEliminar = modal.querySelector(".fa fa-trash")

buttonSalir.addEventListener("click", ()=>{
    modal.classList.add("ocultar")
})
