# Proyecto_Conciertos_ArevaloThomas_RuedaAndres

# 🎵 Proyecto Boletas

## 📌 Descripción

Proyecto web desarrollado con **HTML, CSS y JavaScript** para la gestión y compra de boletas de eventos musicales. La aplicación permite visualizar eventos organizados por categorías, realizar compras simuladas y administrar los eventos desde un panel de administración.

---

## 🚀 Funcionalidades

### Usuario
- Visualizar eventos disponibles.
- Filtrar eventos por categoría.
- Ver información de cada evento.
- Comprar boletas.
- Registro de la compra mediante LocalStorage.

### Administrador
- Inicio de sesión.
- Crear nuevos eventos.
- Editar eventos existentes.
- Eliminar eventos.
- Visualizar el total de eventos registrados.
- Consultar los últimos pagos realizados.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage
- JSON

---

## 📂 Estructura del proyecto

```
Proyecto-Boletas/
│
├── css/
│   ├── styles.css
│   └── responsive.css
│
├── data/
│   ├── events.json
│   └── admin.json
│
├── js/
│   ├── index.js
│   ├── admin.js
│   ├── login.js
│   └── pago.js
│
├── view/
│   ├── admin.html
│   ├── login.html
│   └── pago.html
│
├── index.html
└── README.md
```

---

## 📋 Requisitos

- Navegador web moderno (Google Chrome, Edge, Firefox, Opera).
- No requiere servidor ni base de datos.

---

## ▶️ Ejecución

1. Descargar o clonar el repositorio.

2. Abrir el proyecto con Visual Studio Code.

3. Ejecutar **Live Server**.

4. Abrir `index.html`.

---

## 💾 Almacenamiento

El proyecto utiliza **LocalStorage** para almacenar:

- Usuario administrador autenticado.
- Evento seleccionado para la compra.
- Historial de compras.
- Estado del modal de bienvenida.

---

## 📖 Funcionamiento

1. El usuario ingresa a la página principal.
2. Visualiza todos los eventos disponibles.
3. Puede filtrar por categoría.
4. Selecciona un evento y realiza la compra.
5. La compra queda registrada en LocalStorage.
6. El administrador puede consultar los últimos pagos y gestionar los eventos.

---

## 👨‍💻 Autores

- Andrés Rueda
- Thomas Arévalo

---

## 📄 Licencia

Proyecto desarrollado con fines educativos.
