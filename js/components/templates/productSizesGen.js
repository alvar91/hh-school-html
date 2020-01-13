//Функция для генерации шаблона с размерами продукта
export const productSizesGen = productInfo => {
  let templateSizes = "";

  //Если товар размерный, то включаем его размеры в шаблон
  if (productInfo.sizes) {
    for (let size in productInfo.sizes) {
      templateSizes += '<div class="product-card__sizing-box"><label>';

      //Если товар в наличии, делаем input доступным для выбора
      if (productInfo.sizes[size]) {
        if (productInfo.checkedSize && productInfo.checkedSize === size) {
          templateSizes += `
              <input type="radio" name="size" class="radio js-form-element" value="${size}" checked />
            `;
        } else {
          templateSizes += `
            <input type="radio" name="size" class="radio js-form-element" value="${size}" />
        `;
        }
      } else {
        //В ином случае делаем input недоступным для выбора
        templateSizes += `
                  <input type="radio" name="size" class="radio" value="${size}" disabled />
              `;
      }
      templateSizes += `<span class="radio-button product-card__sizing-button">${size}</span>
              </label>
            </div>
            `;
    }
    return templateSizes;
  } else {
    return templateSizes;
  }
};
