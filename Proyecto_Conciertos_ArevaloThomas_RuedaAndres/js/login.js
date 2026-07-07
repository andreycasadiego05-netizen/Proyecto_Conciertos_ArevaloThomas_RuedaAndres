const contenedor = document.getElementById("contenedor-eventos");

const categoria = document.getElementById("categoria");
const ciudad = document.getElementById("ciudad");
const buscar = document.getElementById("buscar");

let datos = [];

obtenerEventos()
.then(categorias => {

    datos = categorias;

    cargarCategorias();
    cargarCiudades();
    crearTarjetas(datos, contenedor);
    actualizarContador();

})
.catch(console.error);

function cargarCategorias() {

    if (!categoria) return;

    categoria.innerHTML = `
        <option value="Todas">Todas las categorías</option>
    `;

    datos.forEach(cat => {

        categoria.innerHTML += `
            <option value="${cat.nombre}">
                ${cat.nombre}
            </option>
        `;

    });

}

function cargarCiudades() {

    if (!ciudad) return;

    ciudad.innerHTML = `
        <option value="Todas">Todas las ciudades</option>
    `;

    const ciudades = [];

    datos.forEach(cat => {

        if (!cat.eventos) return;

        cat.eventos.forEach(evento => {

            if (
                evento.ciudad &&
                !ciudades.includes(evento.ciudad)
            ) {
                ciudades.push(evento.ciudad);
            }

        });

    });

    ciudades.sort();

    ciudades.forEach(c => {

        ciudad.innerHTML += `
            <option value="${c}">
                ${c}
            </option>
        `;

    });

}

function actualizarContador() {

    let total = 0;

    datos.forEach(cat => {

        if (cat.eventos) {
            total += cat.eventos.length;
        }

    });

    const contador = document.querySelector(".contador-texto h1");

    if (contador) {
        contador.textContent = total + "+";
    }

}

function aplicarFiltros() {

    const catSeleccionada = categoria ? categoria.value : "Todas";
    const ciudadSeleccionada = ciudad ? ciudad.value : "Todas";
    const texto = buscar ? buscar.value.toLowerCase().trim() : "";

    const resultado = [];

    datos.forEach(cat => {

        if (!cat.eventos) return;

        if (
            catSeleccionada !== "Todas" &&
            cat.nombre !== catSeleccionada
        ) {
            return;
        }

        const eventos = cat.eventos.filter(evento => {

            const coincideCiudad =
                ciudadSeleccionada === "Todas" ||
                evento.ciudad === ciudadSeleccionada;

            const coincideNombre =
                evento.nombre.toLowerCase().includes(texto);

            return coincideCiudad && coincideNombre;

        });

        if (eventos.length > 0) {

            resultado.push({
                nombre: cat.nombre,
                eventos: eventos
            });

        }

    });

    crearTarjetas(resultado, contenedor);

}

if (categoria) {
    categoria.addEventListener("change", aplicarFiltros);
}

if (ciudad) {
    ciudad.addEventListener("change", aplicarFiltros);
}

if (buscar) {
    buscar.addEventListener("input", aplicarFiltros);
}


categoria.addEventListener("change", () => {

    if (categoria.value === "Todas") {
        crearTarjetas(datos);
        return;
    }

    const filtradas = datos.filter(cat => cat.nombre === categoria.value);

    crearTarjetas(filtradas);

});
