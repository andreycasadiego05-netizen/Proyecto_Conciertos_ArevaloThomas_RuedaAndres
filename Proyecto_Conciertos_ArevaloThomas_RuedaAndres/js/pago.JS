const evento = JSON.parse(localStorage.getItem("eventoSeleccionado"));

console.log(evento);


document.getElementById("nombre").textContent = evento.nombre;
document.getElementById("precio").textContent = "$" + evento.precio;
document.getElementById("fecha").textContent = evento.fecha;