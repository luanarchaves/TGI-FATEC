export default function mainComponent()
{
	const main = document.createElement('main');
	main.innerHTML = `
	<article id="home" class="article-main">
		<div class="info-article-main">
			<header>
				<div>
					<h1 style="margin: 0;">Planejamento, qualidade e <br>profissionalismo</h1>
				</div>
			</header>
				<section>
					<div class="p-article">
						<p>Nós gerenciamos resíduos das classes I, II A e II B, atendendo empresas de diversos setores, como indústria, bens de consumo, construção civil, prestação de serviços e comércio, além de grandes geradores de resíduos sólidos nos setores público e privado.</p>
					</div>
					<div class="button-article-main">
							<a href="https://www.novohorizonteambiental.com.br/produtos" target="_blank"><button class="button-article-main">Produtos</button></a>
							<a href="https://www.novohorizonteambiental.com.br/informacoes" target="_blank" style="background-color: white;"><button class="button-article-main" style="color: black;">Informações</button></a>
					</div>
				</section>
		</div>
	</article>

	<article id="empresa" class="article-two">

		<section class="section-left">
			<div class="element-section-left"></div>
		</section>

		<section class="section-right">
				<div>
					<h1>Novo Horizonte Ambiental</h1>
				</div>
				<div class="titulo-text">
					<div><img src="img/save-the-world.png" alt=""></div>
					<div><h2>Gestão de Resíduos Eficiente</h2></div>
				</div>
			<p>Com uma infraestrutura de qualidade a Novo Horizonte Ambiental mantém todas as licenças e autorizações necessárias atualizadas junto aos órgãos públicos, além de contar com funcionários qualificados e equipamentos próprios e adequados para coleta, transporte e destinação dos diversos resíduos que podem ser gerados, oferecendo um atendimento rápido, eficaz e seguro.</p>
			<a href="https://www.novohorizonteambiental.com.br/a-empresa" target="_blank"><button class="button-article-two">Nossa Historia</button></a>
		</section>

	</article>`;
	return main;
}
