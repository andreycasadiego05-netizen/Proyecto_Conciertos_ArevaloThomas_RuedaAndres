const contenedor = document.getElementById("contenedor-eventos");
const categoria = document.getElementById("categoria");

let datos = [];

fetch("./data/evento.json")
    .then(response => response.json())
    .then(data => {

        datos = data.categorias;

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

        crearTarjetas(datos);

        let totalEventos = 0;

        datos.forEach(cat => {
            totalEventos += cat.eventos.length;
        });

        document.querySelector(".contador-texto h1").textContent = totalEventos + "+";

    })
    .catch(error => {
        console.error("Error al cargar el JSON:", error);
    });

function crearTarjetas(categorias) {

    contenedor.innerHTML = "";

    categorias.forEach(cat => {

        cat.eventos.forEach(evento => {

            const claseEstado = evento.estado.split(" ")[0];

            contenedor.innerHTML += `
                <article class="tarjeta">

                    <img src="${evento.imagen}" alt="${evento.nombre}">

                    <div class="info">

                        <span class="estado ${claseEstado}">
                            ${evento.estado}
                        </span>

                        <h2>${evento.nombre}</h2>

                        <p><strong>Categoría:</strong> ${cat.nombre}</p>

                        <p><strong>Ciudad:</strong> ${evento.ciudad}</p>

                        <p><strong>Fecha:</strong> ${evento.fecha}</p>

                        <h3>$${evento.precio.toLocaleString()}</h3>

                    </div>

                </article>
            `;

        });

    });

}

categoria.addEventListener("change", () => {

    if (categoria.value === "Todas") {
        crearTarjetas(datos);
        return;
    }

    const filtradas = datos.filter(cat => cat.nombre === categoria.value);

    crearTarjetas(filtradas);

});
