//Функция для формирования объекта с пользовательскими данными из формы
export const outputSubmit = (allElements, productName) => {
  const sendObj = {};
  allElements.forEach(element => {
    if(element.name === "user-name") {
        sendObj["Имя пользователя"] = element.value;
    } else if(element.name === "user-email") {
        sendObj["Электронный адрес пользователя"] = element.value;
    } else if(element.name === "user-name") {
        sendObj["Имя пользователя"] = element.value;
    } else if(element.name === "code-country") {
        sendObj["Код страны"] = element.value;
    } else if(element.name === "mobile-number") {
        sendObj["Номер мобильного телефона"] = element.value;
    } else if(element.name === "delivery" && element.checked){
        sendObj["Выбранный способ получения"] = element.value;
    } else if(element.name === "city"){
        sendObj["Выбранный город"] = element.value;
    } else if(element.name === "address"){
        sendObj["Указанный адрес"] = element.value;
    } else if(element.name === "pay" && element.checked){
        sendObj["Выбранный способ оплаты"] = element.value;
    } else if(element.name === "sms"){
        sendObj["Оповещение по sms"] = element.checked;
    } else if(element.name === "size" && element.checked){
        sendObj["Выбранный размер"] = element.value;
    } else if (productName) {
        sendObj["Выбранный продукт"] = productName;
    }
  });
  return sendObj;
};