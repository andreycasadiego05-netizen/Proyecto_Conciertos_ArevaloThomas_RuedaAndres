const contenedor = document.getElementById("contenedorCarrito");
const carritoVacio = document.getElementById("carritoVacio");
const resumen = document.getElementById("resumenCarrito");
const totalCompra = document.getElementById("totalCompra");
const btnVaciar = document.getElementById("vaciarCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

mostrarCarrito();

function mostrarCarrito() {

    contenedor.innerHTML = "";

    if (carrito.length === 0) {

        carritoVacio.style.display = "block";
        resumen.style.display = "none";

        return;

    }

    carritoVacio.style.display = "none";
    resumen.style.display = "block";

    let total = 0;

    carrito.forEach((evento, index) => {

        total += evento.precio * evento.cantidad;

        contenedor.innerHTML += `

        <article class="tarjeta">

            <img src="${evento.imagen}" alt="${evento.nombre}">

            <div class="info">

                <h2>${evento.nombre}</h2>

                <p><strong>Categoría:</strong> ${evento.categoria}</p>

                <p><strong>Ciudad:</strong> ${evento.ciudad}</p>

                <p><strong>Fecha:</strong> ${evento.fecha}</p>

                <h3>$${evento.precio.toLocaleString()}</h3>

                <div class="acciones-carrito">

                    <button class="menos" data-index="${index}">
                        -
                    </button>

                    <span class="cantidad">
                        ${evento.cantidad}
                    </span>

                    <button class="mas" data-index="${index}">
                        +
                    </button>

                    <button class="eliminar" data-index="${index}">
                        Eliminar
                    </button>

                </div>

            </div>

        </article>

        `;

    });

    totalCompra.textContent = "$" + total.toLocaleString();

    activarBotones();

}

function activarBotones() {

    document.querySelectorAll(".mas").forEach(btn => {

        btn.onclick = () => {

            carrito[btn.dataset.index].cantidad++;

            guardar();

        };

    });

    document.querySelectorAll(".menos").forEach(btn => {

        btn.onclick = () => {

            const item = carrito[btn.dataset.index];

            item.cantidad--;

            if (item.cantidad <= 0) {

                carrito.splice(btn.dataset.index, 1);

            }

            guardar();

        };

    });

    document.querySelectorAll(".eliminar").forEach(btn => {

        btn.onclick = () => {

            carrito.splice(btn.dataset.index, 1);

            guardar();

        };

    });

}

btnVaciar.addEventListener("click", () => {

    if (!confirm("¿Vaciar todo el carrito?")) return;

    carrito = [];

    guardar();

});

function guardar(){

    localStorage.setItem("carrito",JSON.stringify(carrito));

    mostrarCarrito();

    actualizarContador();

}

function actualizarContador(){

    const contador=document.getElementById("contadorCarrito");

    if(!contador) return;

    let total=0;

    carrito.forEach(item=>{

        total+=item.cantidad;

    });

    contador.textContent=total;

}

actualizarContador();


const formularioPago = document.getElementById("formPago");

formularioPago.addEventListener("submit", e => {

    e.preventDefault();

    alert("Pago realizado con éxito.");

    localStorage.removeItem("carrito");

    carrito = [];

    mostrarCarrito();

    formularioPago.reset();

});