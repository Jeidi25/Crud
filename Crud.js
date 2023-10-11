const botonAgregar = document.querySelector('.botonAgregar');
const formulario = document.querySelector('.formulario');

botonAgregar.addEventListener('click', function () {
    formulario.style.display = 'flex';
});

const botonSalir = document.querySelector('.Salir');
botonSalir.addEventListener('click', function () {
formulario.style.display = 'none';
});

const botonGuardar = document.querySelector('.Guardar');
botonGuardar.addEventListener('click', function () {

const nombreInput = document.getElementById('Nombre').value;
const apellidoInput = document.getElementById('Apellido').value;
const emailInput = document.getElementById('E-mail').value;
const tipoSelect = document.getElementById('Tipo').value;

const table = document.querySelector(".Table");
const nuevaClass = document.createElement('field');
const divActivo = document.createElement('field');
divActivo.innerText = ' '
const divNombre = document.createElement('field');
divNombre.innerText = nombreInput;
const divApellido = document.createElement('field');
divApellido.innerText = apellidoInput;
const divEmail = document.createElement('field');
divEmail.innerText = emailInput;
const divTipo = document.createElement('field');
divTipo.innerText = tipoSelect;

nuevaClass.appendChild(divActivo);
nuevaClass.appendChild(divNombre);
nuevaClass.appendChild(divApellido);
nuevaClass.appendChild(divEmail);
nuevaClass.appendChild(divTipo);

table.appendChild(nuevaClass);

formulario.style.display = 'none';

});
const Anterior= document.querySelector('.Anterior')
Siguiente.addEventListener('click', function (){
});

const Siguiente= document.querySelector('.Siguiente')
Siguiente.addEventListener('click', function (){

});

const divActivo = document.createElement("Activo");
divActivo.classList = "Tipo";

const divUsuario =document.createElement("Usuarios")

var celda1 = document.createElement("div");
celda1.className = "celda";
celda1.textContent = "Nuevo Dato 1";

var celda2 = document.createElement("div");
celda2.className = "celda";
celda2.textContent = "Nuevo Dato 2";

var celda3 = document.createElement("div");
celda3.className = "celda";
celda3.textContent = "Nuevo Dato 3";

