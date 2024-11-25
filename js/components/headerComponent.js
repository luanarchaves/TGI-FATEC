export default function headerComponent()
{
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="nav-top">
        <div><p>leandro@novohorizonteambiental.com.br</p></div>
        <div>
            <ul class="telefone-nav-top">
                <li>11 3911-2307</li>
                <li>11 97544-2982</li>
            </ul>
        </div>
    </div>

    <nav>
        <div class="nav-main">
            <div>
                <a href="index.html"><img class="img-nav-main" src="./img/logo.png" alt=""></a>
            </div>
            <div>
                <ul class="info-nav-main">
                    <li id="li1"><a href="#home">Home</a></li>
                    <li id="li2"><a href="#empresa">Empresa</a></li>
                    <li id="li3"><a href="#servicos">Serviços</a></li>
                    <li id="li4"><a href="">Produtos</a></li>
                    <li id="li5"><a href="">Informações</a></li>
                </ul>
            </div>
            <div >
                <a href="https://www.novohorizonteambiental.com.br/contato" target="_blank" style="font-family: sans-serif;"><button class="button-nav-main">Contato</button></a>
            </div>
        </div>
    </nav>
    `;
    return header;
}