import { orderTemplateGen } from "../templates/orderTemplateGen";
import { selectTemplateGen } from "../templates/selectTemplateGen";
import { validate } from "../form/validate";
import { outputSubmit } from "./outputSubmit";

//Функция для отображения активной формы заказа для выбранного продукта
export const showOrder = productInfo => {
  //Генерируем шаблон с информацией по продукту
  const productTemplate = orderTemplateGen(productInfo);

  //Вставляем шаблон с информацией по продукту на страницу
  document
    .querySelector(".footer")
    .insertAdjacentHTML("afterend", `${productTemplate}`);

  const activeOrder = document.querySelector(".popup-order_active");
  let body = document.querySelector("#body");
  body.style.overflow = "hidden";

  //При нажатии на крестик закрытия
  //снимаем с заказа статус активного
  //и удаляем информацию по предыдущему заказу
  let exitIcon = document.querySelector(".popup-order__button-close");
  let activeProduct = document.querySelector(".popup-order__product-card");
  body = document.querySelector("#body");
  exitIcon.addEventListener("click", () => {
    activeOrder.remove("popup-order_active");
    activeProduct.remove("popup-order__product-card");
    body.style.overflow = "auto";
  });

  //Генерируем шаблон с городами для select и вставляем его на страницу
  const citySelect = document.querySelector(".select");
  selectTemplateGen(citySelect);

  //Провалидируем все поля формы, обязательные для заполнения
  const elementsRequired = document.querySelectorAll(".js-form-element-required");
  validate(elementsRequired);
  
  //Навешиваем обработчик на submit
  const submitForm = document.querySelector(".popup-order__form");
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Собираем все пользовательские данные из формы
    const allElements = document.querySelectorAll(".js-form-element");
    //Упаковываем пользовательские данные в объект
    const sendObj = outputSubmit(allElements, productInfo.name);

    //Выводим полученный объект в консоль
    console.log(sendObj);
  });
};
