
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});


//VALIDAR CAMPOS FORMULARIO REGISTRO
document.getElementById('form').addEventListener('submit', function(event) {
    var emailFormulario = document.getElementById('email');
    var nombreFormulario = document.getElementById('nombre');
    var apellidoFormulario = document.getElementById('apellido');
    var telefonoFormulario = document.getElementById('telefono');
    var contrasenaFormulario = document.getElementById('contrasena');
    var errorMessages = [];

    if (!emailFormulario.value || !/\S+@\S+\.\S+/.test(emailFormulario.value)) {
        errorMessages.push('Ingrese un correo electrónico válido');
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s']+$/.test(nombreFormulario.value.trim())) {
        errorMessages.push('Ingrese un nombre válido (solo letras)');
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s']+$/.test(apellidoFormulario.value.trim())) {
        errorMessages.push('Ingrese un apellido válido (solo letras)');
    }

    if (!/^\d{9}$/.test(telefonoFormulario.value.replace(/\s+/g, '').replace(/-/g, ''))) {
        errorMessages.push('Ingrese un número de teléfono válido (9 números)');
    }

    
    var contrasena = contrasenaFormulario.value;
    if (contrasena.length > 50) {
        errorMessages.push('La contraseña no puede tener más de 50 caracteres.');
    }
    var contieneMayuscula = /[A-Z]/.test(contrasena);
    var contieneMinuscula = /[a-z]/.test(contrasena);
    var contieneNumero = /\d/.test(contrasena);
    if (!contieneMayuscula || !contieneMinuscula || !contieneNumero) {
        errorMessages.push('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
    }

    if (errorMessages.length > 0) {
        event.preventDefault();

        var errorMessageContainer = document.getElementById('error-messages');
        errorMessageContainer.innerHTML = '';
        errorMessages.forEach(function(message) {
            var errorMessage = document.createElement('div');
            errorMessage.textContent = message;
            errorMessageContainer.appendChild(errorMessage);
        });
    }
    else{
        alert('Registro exitoso.');
        document.getElementById('overlay').style.display = 'none';
    }
});


//CAMBIAR MODO OSCURO
document.getElementById('darkModeSwitch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('barra-verde').classList.toggle('dark-mode');
  });

  
//BOTON CANCELAR FORMULARIO
function cancelar() {

    alert('Operación cancelada.');
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
//BOTON REGISTRO FORMULARIO
document.getElementById('botonRegistro').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});
//BOTON CERRAR FORMULARIO
document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
