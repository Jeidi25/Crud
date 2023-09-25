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

const formulario = document.querySelector(".formulario");

const nuevaClass = document.createElement('field');

const divActivo = document.createElement('field');
divActivo.innerText = 'x'
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

formulario.appendChild(nuevaClass);

formulario.style.display = 'none';
});