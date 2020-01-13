//Функция сокрытия и удаления данных для карточки активного товара
export const hideCard = card => {
  card.classList.remove("product-card_active");

  //Находим в карточке первый дочерний элемент
  //если он является крестиком закрытия, то удаляем его
  const orderInfo = card.firstElementChild;
  if (orderInfo.classList.contains("product-card__button-close")) {
    orderInfo.remove();
  }

  //Находим в карточке последний дочерний элемент
  //если он является дополнительной информацией по товару, то удаляем его
  const exitIcon = card.lastElementChild;
  if (exitIcon.classList.contains("product-card__order-info")) {
    exitIcon.remove();
  }
};
