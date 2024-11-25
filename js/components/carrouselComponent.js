function insertMovementsListerner()
{
	document.addEventListener("DOMContentLoaded", function () {
		const carousel = document.querySelector(".carrosel");
		const items = document.querySelectorAll(".carrosel .card-carrosel");

		items.forEach((item) => {
			item.addEventListener("click", function () {
			const itemLeft =
				item.offsetLeft + item.clientWidth / 2 - carousel.clientWidth / 2;
			carousel.scrollLeft = itemLeft;
			});
		});
	});

	const buttonLeft = document.getElementById("button-left");
	const buttonRight = document.getElementById("button-right");

	buttonLeft.addEventListener("click", function () {
		movementCarrossel("right");
	});
	buttonRight.addEventListener("click", function () {
		movementCarrossel("left");
	});
}

function movementCarrossel(direction) {
	const carousel = document.querySelector(".carrosel");
	const items = document.querySelectorAll(".carrosel .card-carrosel");
	const item = items[0];
	const itemLeft =
	  item.offsetLeft + item.clientWidth / 2 - carousel.clientWidth / 2;
	if (direction == "left")
		carousel.scrollLeft -= itemLeft;
	else
		carousel.scrollLeft += itemLeft;
}


export default function carrouselComponent()
{
	const carrousel = document.createElement('article');
	carrousel.classList.add('article-three');
	carrousel.innerHTML = `
	<header id="servicos">
            <h1>Nossos Serviços</h1>
        </header>
        <section class="carrosel-container">

            <button id="button-left" class="prev">&#10094;</button>
            <section class="carrosel">
                <div class="card-carrosel" id="card-one">
                    <p>Disponibilização dos mais diversos coletores para atendimento de praticamente todos os resíduos gerados pelas empresas.</p>
                    <h2>Coleta</h2>
                </div>

                <div class="card-carrosel" id="card-two">
                    <p>Veículos dos mais diversos para atender a demanda dos mais diversos tipos de resíduos gerados.</p>
                    <h2>Transporte</h2>
                </div>

                <div class="card-carrosel" id="card-three">
                    <p>A destinação do resíduo coletado e transportado pela Novo Horizonte Ambiental, varia de acordo com a classificação e qualidade do resíduo gerado.</p>
                    <h2>Destinação</h2>
                </div>

                <div class="card-carrosel" id="card-four">
                    <p>O gerenciamento de resíduos consiste em todo o apoio logístico e operacional nos serviços de coleta, transporte e destinação.</p>
                    <h2>Gerenciamento</h2>
                </div>
            </section>
            <button id="button-right" class="next">&#10095;</button>
        </section>
	`;
	return carrousel;
}

export {insertMovementsListerner, movementCarrossel};