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


const button = document.getElementById('button-article-four')

button.addEventListener("click", function(event) {
  event.preventDefault()
})