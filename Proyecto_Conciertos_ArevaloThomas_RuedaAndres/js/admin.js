const contenedor = document.getElementById("contenedorAdmin");
const formulario = document.getElementById("formEvento");
const restaurar = document.getElementById("restablecerEventos");


const formCategoria = document.getElementById("formCategoria");
const formEliminarCategoria = document.getElementById("formEliminarCategoria");
let categorias = [];
let imagenBase64 = "";





fetch("../data/admin.json")
    .then(respuesta => respuesta.json())
    .then(admin => {

        const formulario = document.querySelector(".formulario");

        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const correo = document.getElementById("email").value;
            const contrasena = document.getElementById("password").value;

            if (
                correo === admin.correo &&
                contrasena === admin.contrasena
            ) {
                alert("Bienvenido administrador");
                window.location.href = "../view/admin.html";
            } else {
                alert("Correo o contraseña incorrectos");
            }
        });

    });




class botoneslogin extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            
        <div>

        <a href="../index.html" class="a-variant">←</a>
        <div>
            <h1>MODO DE ADMINISTRACION</h1>

    
            <form class="formulario slide-up"  method="post">
    
                <label for="email">Correo</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Admin@mail.com"
                    required
                >
    
                <label for="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="123456"
                    required
                    minlength="5"
                    pattern="[A-Za-z0-9 ]+"
                    title="Solo letras, números y espacios"
                >
    
                <button type="submit" class="boton pulse">

                    INGRESAR
                    </a>

    
            </form>
        </div>
    </div>
        `;
    }
}

customElements.define("botones-login", botoneslogin);












obtenerEventos().then(datos => {

    categorias = datos;

    crearTarjetas(categorias, contenedor, true);

    activarBotones();

});

const inputImagen = document.getElementById("imagen");

inputImagen.addEventListener("change", e => {

    const archivo = e.target.files[0];

    if (!archivo) {

        imagenBase64 = "";

        return;

    }

    const lector = new FileReader();

    lector.onload = function () {

        imagenBase64 = lector.result;

    };

    lector.readAsDataURL(archivo);

});

formulario.addEventListener("submit", e => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value;
    const ciudad = document.getElementById("ciudad").value.trim();
    const fecha = document.getElementById("fecha").value;
    const precio = Number(document.getElementById("precio").value);
    const estado = document.getElementById("estado").value;

    if (!imagenBase64) {

        alert("Seleccione una imagen.");

        return;

    }

    let categoriaEncontrada = categorias.find(c => c.nombre === categoria);

    if (!categoriaEncontrada) {

        categoriaEncontrada = {

            nombre: categoria,
            eventos: []

        };

        categorias.push(categoriaEncontrada);

    }

    categoriaEncontrada.eventos.push({

        id: Date.now(),

        nombre,

        ciudad,

        fecha,

        precio,

        estado,

        imagen: imagenBase64

    });

    guardarEventos(categorias);

    crearTarjetas(categorias, contenedor, true);

    activarBotones();

    formulario.reset();

    imagenBase64 = "";

    alert("Evento creado correctamente.");

});


function activarBotones() {

    document.querySelectorAll(".eliminar").forEach(boton => {

        boton.onclick = () => {

            if (!confirm("¿Desea eliminar este evento?")) return;

            const id = Number(boton.dataset.id);

            categorias.forEach(cat => {

                cat.eventos = cat.eventos.filter(evento => evento.id !== id);

            });

            categorias = categorias.filter(cat => cat.eventos.length > 0);

            guardarEventos(categorias);

            crearTarjetas(categorias, contenedor, true);

            activarBotones();

        };

    });

}


restaurar.addEventListener("click", () => {

    if (!confirm("Se eliminarán todos los cambios realizados. ¿Continuar?")) {

        return;

    }

    fetch("../data/evento.json")

        .then(res => res.json())

        .then(data => {

            categorias = data.categorias;

            guardarEventos(categorias);

            crearTarjetas(categorias, contenedor, true);

            activarBotones();

            alert("Eventos restaurados correctamente.");

        });

});



formCategoria.addEventListener("submit", e => {

    e.preventDefault();

    const nombre = document
        .getElementById("nombreCategoria")
        .value
        .trim();

    if (!nombre) return;

    const existe = categorias.find(c =>
        c.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (existe) {

        alert("La categoría ya existe.");

        return;

    }

    categorias.push({

        nombre: nombre,
        eventos: []

    });

    guardarEventos(categorias);

    actualizarCategoriasFormulario();

    formCategoria.reset();

    alert("Categoría creada.");

});

function actualizarCategoriasFormulario() {

    const select = document.getElementById("categoria");
    const selectEliminar = document.getElementById("categoriaEliminar");

    select.innerHTML = "";
    selectEliminar.innerHTML = "";

    categorias.forEach(cat => {

        select.innerHTML += `
            <option value="${cat.nombre}">
                ${cat.nombre}
            </option>
        `;

        selectEliminar.innerHTML += `
            <option value="${cat.nombre}">
                ${cat.nombre}
            </option>
        `;

    });

}

const lista = document.getElementById("lista-pagos");
console.log(lista); // ¿Sale el div o sale null?

const compras = JSON.parse(localStorage.getItem("compras")) || [];
console.log(compras); // ¿Qué imprime?

compras.forEach(compra => {
    console.log(compra);

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pago");

    tarjeta.innerHTML = `
        <h3>${compra.evento}</h3>
        <p>Precio: $${compra.precio}</p>
        <p>${compra.fechaCompra}</p>
    `;

    lista.appendChild(tarjeta);
});