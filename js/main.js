import carrouselComponent,
  { insertMovementsListerner,
    movementCarrossel } from "./components/carrouselComponent.js";
import headerComponent from "./components/headerComponent.js";
import mainComponent from "./components/mainComponent.js";



const app = document.getElementById("app");

console.log(app);
app.appendChild(headerComponent());
app.appendChild(mainComponent());
app.appendChild(carrouselComponent());





insertMovementsListerner();



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

const option_section_two = document.querySelectorAll(".options-section-two");
const input_section_two = document.querySelectorAll(".input");

mudarFundoSectionTwo(option_section_two);
mudarFundoSectionTwo(input_section_two);

function limparForm() {
  button.addEventListener("click", function (event) {
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

function mostrarMensagem() {
  const overlay = document.getElementById("overlay");
  const mensagem = document.getElementById("mensagem");
  const fecharMensagem = document.getElementById("mensagemFechar");

  button.addEventListener("click", function () {
    overlay.style.display = "block";
    mensagem.style.display = "flex";
  });

  fecharMensagem.addEventListener("click", function () {
    overlay.style.display = "none";
    mensagem.style.display = "none";
  });
}

const button = document.getElementById("button-article-four");
const input = document.querySelectorAll("input");
const select = document.querySelectorAll("select");
const textarea = document.getElementById("textarea-section");

limparForm();
mostrarMensagem();
