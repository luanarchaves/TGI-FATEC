export default function footerComponent()
{
	const footer = document.createElement('section');
	footer.innerHTML = `
	<img class="img-article-five" src="img/img-footer.png" alt="">

    <footer class="article-five">

        <section class="section-one-article-five">
            <div>
                <img src="img/logo.png" alt="">
                <h1 style="font-weight: lighter;">Dedicação e responsabilidade</h1>
            </div>
        </section>

        <section class="section-two-article-five">
            <div>
                <img src="img/pin.png" alt="">
                <p>R. Caldas Novas, 105 - Bethaville</p>
                <p>Barueri - SP, 06404-301</p>
            </div>
            <div>
                <img src="img/telephone.png" alt="">
                <p>11 3911-2307</p>
                <p>11 97544-2982</p>
            </div>
            <div>
                <img src="img/mail.png" alt="">
                <p>leandro@novohorizonteambiental.com.br</p>
            </div>
        </section>

    </footer>`;
	return footer;
}