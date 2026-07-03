

fetch("./data/admin.json")
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
                <a href="../view/admin.html">
                    INGRESAR
                    </a>
                </button>
    
            </form>
        </div>
    </div>
        `;
    }
}

customElements.define("botones-login", botoneslogin);