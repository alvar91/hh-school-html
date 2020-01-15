//Функция для формирования объекта с пользовательскими данными из формы
export const outputSubmit = (allElements, productName) => {
  const sendObj = {};
  allElements.forEach(element => {
    if (element.name === "user-name") {
      //Имя пользователя
      sendObj[element.name] = element.value;
    } else if (element.name === "user-email") {
      //Электронный адрес пользователя
      sendObj[element.name] = element.value;
    } else if (element.name === "user-name") {
      //Имя пользователя
      sendObj[element.name] = element.value;
    } else if (element.name === "code-country") {
      //Код страны
      sendObj[element.name] = element.value;
    } else if (element.name === "mobile-number") {
      //Номер мобильного телефона
      sendObj[element.name] = element.value;
    } else if (element.name === "delivery" && element.checked) {
      //Выбранный способ получения
      sendObj[element.name] = element.value;
    } else if (element.name === "city") {
      //Выбранный город
      sendObj[element.name] = element.value;
    } else if (element.value && element.name === "address") {
      //Указанный адрес
      sendObj[element.name] = element.value;
    } else if (element.name === "pay" && element.checked) {
      //Выбранный способ оплаты
      sendObj[element.name] = element.value;
    } else if (element.name === "sms") {
      //Оповещение по sms
      sendObj[element.name] = element.checked;
    } else if (element.name === "size" && element.checked) {
      //Выбранный размер
      sendObj[element.name] = element.value;
    } else if (productName) {
      //Выбранный продукт
      sendObj["product-name"] = productName;
    }
  });
  return JSON.stringify(sendObj);
};
