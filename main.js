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

function mudarFundoSectionTwo(item){
  let situação = false

  item.forEach(option => {
    option.addEventListener("click", function() {
      if (situação == false) {
        option.style.background = "#79C942"; 
      } else {
        option.style.background = "#009200"; 
      }
      situação = !situação; 
    });
  });
}


const option_section_two = document.querySelectorAll('.options-section-two')
const input_section_two = document.querySelectorAll('.input')

mudarFundoSectionTwo(option_section_two)
mudarFundoSectionTwo(input_section_two)


function limparForm(){
  button.addEventListener("click", function(event) {
    event.preventDefault()
    
    input.forEach(inputs =>{
      inputs.value = ""
    })
  
    select.forEach(selectOption => {
      selectOption.value = ""
    })
  
    textarea.value = ""

  })
  
}

function mostrarMensagem(){
  const mensagem = document.getElementsByClassName('mensagem')
  const fecharMensagem = document.getElementById('mensagemFechar')

  button.addEventListener("click", function(){
      mensagem[0].style.position = "absolute";
      mensagem[0].style.display = "flex"
  })

  fecharMensagem.addEventListener("click", function(){
    mensagem[0].style.display = "none"
  })
}



const button = document.getElementById('button-article-four')
const input = document.querySelectorAll('input')
const select = document.querySelectorAll('select')
const textarea = document.getElementById('textarea-section')

limparForm()
mostrarMensagem()