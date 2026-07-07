const STORAGE = "eventos";
const STORAGE_CARRITO = "carrito";

function obtenerEventos() {

    const guardados = localStorage.getItem(STORAGE);

    if (guardados) {
        return Promise.resolve(JSON.parse(guardados));
    }

    return fetch("../data/evento.json")
        .then(res => res.json())
        .then(data => {

            localStorage.setItem(STORAGE, JSON.stringify(data.categorias));

            return data.categorias;

        });

}

function guardarEventos(eventos) {

    localStorage.setItem(STORAGE, JSON.stringify(eventos));

}

function agregarAlCarrito(evento, categoria) {

    let carrito = JSON.parse(localStorage.getItem(STORAGE_CARRITO)) || [];

    const existente = carrito.find(item => item.id === evento.id);

    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: evento.id,
            nombre: evento.nombre,
            categoria: categoria,
            ciudad: evento.ciudad,
            fecha: evento.fecha,
            precio: Number(evento.precio),
            imagen: evento.imagen,
            cantidad: 1

        });

    }

    localStorage.setItem(STORAGE_CARRITO, JSON.stringify(carrito));
    actualizarContadorCarrito();

    alert("Evento agregado al carrito.");

}

function crearTarjetas(categorias, contenedor, admin = false) {

    contenedor.innerHTML = "";

    categorias.forEach(cat => {
        
        cat.eventos.forEach(evento => {

            const claseEstado = evento.estado.split(" ")[0];

            const tarjeta = document.createElement("article");

            tarjeta.className = "tarjeta";

            tarjeta.innerHTML = `

            <img src="${evento.imagen}" alt="${evento.nombre}">

            <div class="info">

                <span class="estado ${claseEstado}">
                    ${evento.estado}
                </span>

                <h2>${evento.nombre}</h2>

                <p><strong>Categoría:</strong> ${cat.nombre}</p>

                <p><strong>Ciudad:</strong> ${evento.ciudad}</p>

                <p><strong>Fecha:</strong> ${evento.fecha}</p>

                <h3>$${Number(evento.precio).toLocaleString()}</h3>

                ${
                    admin
                    ?

                    `<div class="acciones-admin">

                        <button
                            class="eliminar"
                            data-id="${evento.id}">
                            Eliminar
                        </button>

                    </div>`

                    :

                    `<div class="acciones-admin">

                    <button
                    class="btn-comprar comprar"
                    data-id="${evento.id}">
                    Agregar al carrito
                </button>

                    </div>`

                }

            </div>

            `;

            contenedor.appendChild(tarjeta);

            if (!admin) {

                tarjeta
                .querySelector(".comprar")
                .addEventListener("click", () => {

                    agregarAlCarrito(evento, cat.nombre);

                });

            }
                
        });

    });

}

function actualizarContadorCarrito(){

    const contador = document.getElementById("contadorCarrito");

    if(!contador) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let cantidad = 0;

    carrito.forEach(item=>{

        cantidad += item.cantidad;

    });

    contador.textContent = cantidad;

}

actualizarContadorCarrito();


function actualizarContadorCarrito(){

    const contador = document.getElementById("contadorCarrito");

    if(!contador) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let cantidad = 0;

    carrito.forEach(item=>{

        cantidad += item.cantidad;

    });

    contador.textContent = cantidad;

}

actualizarContadorCarrito();