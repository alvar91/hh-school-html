import { showCard } from "./showCard";
import { hideCard } from "./hideCard";

//Навешиваем обработчики на все карточки
//При клике на подложку (body) скрываем и удаляем элементы
const cards = document.querySelectorAll(".product-card");
const body = document.querySelector("#body");
const handlerActive = event => {
  cards.forEach(card => {
    if (event.target.closest(".product-card") === card) {
      showCard(card);
    } else {
      hideCard(card);
    }
  });
};
body.addEventListener("click", handlerActive);
