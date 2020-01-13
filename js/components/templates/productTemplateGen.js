import { productSizesGen } from "./productSizesGen";

//Функция для генерации подшаблона с размерами выбранного продукта
export const productTemplateGen = productInfo => {

  //Генерируем шаблон с размерами для продукта
  const templateSizes = productSizesGen(productInfo);

  //Составляем конечный шаблон на основе ранее
  //составленных подшаблонов 
  const templateHTML = `
    <div class="product-card__order-info">
        <div class="product-card__description">
            ${productInfo.description}
        </div>
        <div class="product-card__sizing-container">
            ${templateSizes}
        </div>
        <button class="button button_disabled product-card__button-order" disabled >Заказать</button>
    </div>
    `;
    return templateHTML;
};


