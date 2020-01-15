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
    .querySelector(".js-footer")
    .insertAdjacentHTML("afterend", `${productTemplate}`);

  //Навешиваем обработчик на body
  //При клике на подложку (body) удаляем order
  const activeOrder = document.querySelector(".js-popup-order_active");
  let body = document.querySelector("#body");

  body.style.overflow = "hidden";

  //При нажатии на крестик закрытия
  //снимаем с заказа статус активного
  //и удаляем информацию по предыдущему заказу
  let exitIcon = document.querySelector(".js-popup-order__button-close");
  let activeProduct = document.querySelector(".js-popup-order__product-card");
  body = document.querySelector("#body");
  exitIcon.addEventListener("click", () => {
    activeOrder.remove("popup-order_active");
    activeProduct.remove("popup-order__product-card");
    body.style.overflow = "auto";
  });

  //Генерируем шаблон с городами для select и вставляем его на страницу
  const citySelect = document.querySelector(".js-select");
  selectTemplateGen(citySelect);

  //Если был выбран самовывоз, то делаем select и textarea для ввода адреса недоступными
  //Также исключаем select и textarea из выборки обязательных полей
  const textArea = document.querySelector(".js-textarea");
  const deliveryButtons = document.querySelectorAll("input[name = delivery]");
  deliveryButtons.forEach(deliveryButton => {
    deliveryButton.addEventListener("click", e => {
      const target = e.target;
      if (target.id === "delivery-1") {
        citySelect.disabled = true;
        citySelect.value = "null";
        textArea.value = "";
        textArea.classList.remove("form_error");
        textArea.disabled = true;
      } else {
        textArea.disabled = false;
        citySelect.disabled = false;
      }
    });
  });

  //Провалидируем все поля формы, обязательные для заполнения
  const elementsRequired = document.querySelectorAll(
    ".js-form-element-required"
  );
  validate(elementsRequired);

  //Навешиваем обработчик на submit
  const submitForm = document.querySelector(".js-popup-order__form");
  submitForm.addEventListener("submit", e => {
    e.preventDefault();

    //Собираем все пользовательские данные из формы
    const allElements = document.querySelectorAll(".js-form-element");
    //Упаковываем пользовательские данные в объект
    const sendJSON = outputSubmit(allElements, productInfo.name);

    //Выводим полученный объект в консоль
    console.log(sendJSON);
  });
};
