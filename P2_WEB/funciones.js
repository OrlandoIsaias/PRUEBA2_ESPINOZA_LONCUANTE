const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});
//Código carrito


/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// Funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    // Limpiar HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

        rowProduct.append(containerProduct);

        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};

document.getElementById('botonRegistro').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('overlay')) {
        document.getElementById('overlay').style.display = 'none';
    }
});

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

document.getElementById('darkModeSwitch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('barra-verde').classList.toggle('dark-mode');
  });

