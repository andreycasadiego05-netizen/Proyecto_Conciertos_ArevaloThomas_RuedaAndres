class TarjetaPerfil extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <style>
                *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                .card{
                    width: 320px;
                    background: linear-gradient(135deg, #ffffff, #f0f9ff);
                    border-radius: 20px;
                    margin: 20px auto;
                    overflow: hidden;
                    text-align: center;
                    padding: 25px;
                    font-family: 'Segoe UI', sans-serif;
                    box-shadow: 0 10px 25px rgba(0,0,0,.15);
                    transition: transform .3s ease,
                                box-shadow .3s ease;
                    border: 1px solid #dbeafe;
                }

                .card:hover{
                    transform: translateY(-8px);
                    box-shadow: 0 18px 35px rgba(0,0,0,.2);
                }

                .card img{
                    width: 160px;
                    height: 220px;
                    object-fit: cover;
                    border-radius: 15%;
                    border: 5px solid #38bdf8;
                    margin-bottom: 5px;
                }

                .card h3{
                    color: #0f172a;
                    font-size: 1.8rem;
                    margin-bottom: 10px;
                }

                .card p{
                    color: #475569;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
            </style>

            <div class="card">
                <img src="img/Leo_messi_barce_2005.jpg.webp" alt="Messi">
                <h3>Lionel Messi</h3>
                <p>
                    Ha ganado la Copa del Mundo, múltiples Balones de Oro
                    y numerosos títulos con clubes y selección.
                </p>
            </div>
        `;
    }
}

customElements.define("tarjeta-perfil", TarjetaPerfil);