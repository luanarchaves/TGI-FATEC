function insertListenersForms()
{
	const option_section_two = document.querySelectorAll(".options-section-two");
	const input_section_two = document.querySelectorAll(".input");
	mudarFundoSectionTwo(option_section_two);
	mudarFundoSectionTwo(input_section_two);
	mostrarMensagem();
	limparForm();
}

function limparForm() {
	const butao = document.getElementById("button-article-four");
	const input = document.querySelectorAll("input");
	const select = document.querySelectorAll("select");
	const textarea = document.getElementById("textarea-section");

	butao.addEventListener("click", function (event) {
	  event.preventDefault();

	  input.forEach((inputs) => {
		inputs.value = "";
	  });

	  select.forEach((selectOption) => {
		selectOption.value = "";
	  });

	  textarea.value = "";
	});
}

function mudarFundoSectionTwo(item) {
	let situação = false;

	item.forEach((option) => {
	  option.addEventListener("click", function () {
		if (situação == false) {
		  option.style.background = "#79C942";
		} else {
		  option.style.background = "#009200";
		}
		situação = !situação;
	  });
	});
}

function mostrarMensagem() {
	const overlay = document.getElementById("overlay");
	const mensagem = document.getElementById("mensagem");
	const fecharMensagem = document.getElementById("mensagemFechar");
	const butao = document.getElementById("button-article-four");

	butao.addEventListener("click", function () {
	  overlay.style.display = "block";
	  mensagem.style.display = "flex";
	});

	fecharMensagem.addEventListener("click", function () {
	  overlay.style.display = "none";
	  mensagem.style.display = "none";
	});
	}

export default function formComponent()
{
	const article = document.createElement('article');
	article.classList.add('article-four');
	article.innerHTML = `
	<form>
		<h1 style="font-size: 2.3rem; margin: 50px 0px;" >Contato</h1>
		<h1>Motivo do contato</h1>
		<section class="form-section-one">
			<div>
				<div class="input"><img src="img/feedback.png" alt=""></div>
				<p>FeedBack</p>
			</div>
			<div>
				<div class="input"><img src="img/document.png" alt=""></div>
				<p>Solicitações</p>
			</div>
			<div>
				<div class="input"><img src="img/question.png" alt=""></div>
				<p>Dúvida</p>
			</div>
			<div>
				<div class="input"><img style="width: 65%;" src="img/handshake.png" alt=""></div>
				<p>Parceria</p>
			</div>
			<div>
				<div class="input"><img src="img/pie-chart.png" alt=""></div>
				<p>Orçamento</p>
			</div>
		</section>

		<h1>Como nos conheceu?</h1>
		<section class="form-section-two">
			<h3 class="options-section-two">Google</h3>
			<h3 class="options-section-two">Outros Buscadores</h3>
			<h3 class="options-section-two">Links Patrocinados</h3>
			<h3 class="options-section-two">Anúncio</h3>
			<h3 class="options-section-two">Facebook</h3>
			<h3 class="options-section-two">Twitter</h3>
			<h3 class="options-section-two">Google+</h3>
			<h3 class="options-section-two">Indicação</h3>
			<h3 class="options-section-two">Linkedin</h3>
			<h3 class="options-section-two">Outros</h3>
		</section>

		<section  class="form-section-three">


				<h2>Nome completo</h2>
				<input type="text">
				<h2>E-mail</h2>
				<input type="email">


			<section class="tel-pron-section">

				<div class="fone-area">
					<h2>Celular</h2>
					<select style="width: 65px;">
						<option class="option" value="">DDD</option>
						<option value="+11">+11</option>
						<option value="+12">+12</option>
						<option value="+13">+13</option>
						<option value="+14">+14</option>
						<option value="+15">+15</option>
						<option value="+16">+16</option>
						<option value="+17">+17</option>
						<option value="+18">+18</option>
						<option value="+19">+19</option>
					</select>

					<input type="tel" pattern="[0-9]{5}[0-9]{4}" required>
				</div>

				<div class="prom-area">
					<h2>Pronome</h2>
					<select class="input-pronome">
						<option class="option" value="">Selecione</option>
						<option value="pron-feminino">Feminino</option>
						<option value="pron-masculino">Masculino</option>
						<option value="pron-indefinido">Indefinido</option>
					</select>
				</div>

			</section>

			<section class="section-text">
				<h1 style="margin-top: 50px; text-align: left; letter-spacing: 2px;">Título</h1>
				<input id="title-input" type="text">
				<h2>Mensagem</h2>
				<textarea id="textarea-section"></textarea>
			</section>

		</section>
		<button id="button-article-four" class="button-article-four" type="submit">Enviar</button>
	</form>

	<div id="overlay" class="overlay">

        <div id="mensagem" class="mensagem">
            <img src="img/email.png" alt="">
            <h1>Mensagem enviada com sucesso!</h1>
            <p>Novo Horizonte Ambiental recebeu sua mensagem, entraremos em contato em breve. Caso queira nos ligar consulte o numero no rodapé da pagina</p>
            <a href="https://www.novohorizonteambiental.com.br" target="_blank">www.novohorizonteambiental.com.br</a>
            <button id="mensagemFechar" class="mensagemFechar">Fechar</button>
        </div>
    </div>`;
	return article;
}

export { mudarFundoSectionTwo, mostrarMensagem, insertListenersForms };