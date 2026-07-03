const btnuser = document.querySelector("#btnuser");
const btnadmin = document.querySelector("#btnadmin");
const modal = document.querySelector(".modal");






class TarjetaEvento extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .card-evento {
                    position: relative;
                    width: 100%;
                    max-width: 1720px;
                    min-height: 320px;
                    border-radius: 28px;
                    margin: 20px auto;
                    overflow: hidden;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 50px;
                    color: #ffffff;
                }
                .card-evento::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: url(https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg);
                    z-index: 1;
                }
                .card-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .badges-container {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 5px;
                }

                .badge {
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 6px 14px;
                    border-radius: 20px;
                    background-color: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(4px);
                }
                
                .badge.destacado {
                    background-color: rgba(236, 72, 153, 0.25); /* Tono rosado/rojizo suave */
                    color: #fbcfe8;
                }

                .card-evento h2 {
                    font-family: 'Georgia', serif;
                    font-size: 2.2rem;
                    font-weight: normal;
                    letter-spacing: 0.5px;
                }
                .card-evento p.descripcion {
                    color: #cbd5e1;
                    font-size: 0.95rem;
                    max-width: 600px;
                    line-height: 1.5;
                }
                .meta-info {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    font-size: 0.85rem;
                    color: #94a3b8;
                    margin-top: 5px;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .rating {
                    color: #eab308; /* Color amarillo para la estrella */
                    font-weight: bold;
                }

                
                .card-footer {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    margin-top: 10px;
                }

                .btn-comprar {
                    background-color: #ffffff;
                    color: #000000;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background-color 0.2s;
                }

                .btn-comprar:hover {
                    background-color: #f1f5f9;
                }

                .precio-container {
                    display: flex;
                    flex-direction: column;
                }

                .precio-label {
                    font-size: 0.75rem;
                    color: #94a3b8;
                }

                .precio-valor {
                    font-size: 1.25rem;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                }
            </style>

            <div class="card-evento">
                <div class="card-content">
                    
                    <div class="badges-container">
                        <span class="badge destacado">Evento Destacado</span>
                        <span class="badge">Casi agotado</span>
                    </div>

                    <h2>Noche de Jazz: Quarteto Alma</h2>
                    
                    <p class="descripcion">
                        Una noche irrepetible con el cuarteto más aclamado de la escena jazzística latinoamericana.
                    </p>

                    <div class="meta-info">
                        <div class="meta-item">
                            <span>📅</span> 18 Jul 2026 - 21:00
                        </div>
                        <div class="meta-item">
                            <span>📍</span> Teatro Metropol, Buenos Aires
                        </div>
                        <div class="meta-item rating">
                            <span>⭐</span> 4.9 / 5
                        </div>
                    </div>

                    <div class="card-footer">
                        <button class="btn-comprar">
                            Comprar boletos <span>&gt;</span>
                        </button>
                        <div class="precio-container">
                            <span class="precio-label">Desde</span>
                            <span class="precio-valor">$ 4.500</span>
                        </div>
                    </div>

                </div>
            </div>
        `;
    }
}

customElements.define("tarjeta-evento", TarjetaEvento);


btnuser.addEventListener("click", () => {
    modal.classList.add("oculto");
});


btnadmin.addEventListener("click", () => {
    window.location.href = "view/login.html";
});