import { productSizesGen } from "./productSizesGen";

//Функция для генерации шаблона заказа с выбранным товаром
export const orderTemplateGen = productInfo => {

    //Если существует скидочная цена, то добавляем лэйбл sale 
    //и саму цену в подшаблон
    let saleLabelHTML = '';
    let salePriceHTML = '';
    if(productInfo.salePrice){
        saleLabelHTML = `<div class="popup-order__sale">sale</div>`; 
        salePriceHTML = `<span class="popup-order__old-price">${productInfo.salePrice}</span>`; 
    }

    //Генерируем шаблон с размерами для продукта
    const templateSizes = productSizesGen(productInfo);

    //Составляем конечный шаблон на основе ранее
    //составленных подшаблонов 
    const templateHTML = `
        <div class="popup-order popup-order_active">
            <div class="columns-wrapper popup-order__columns">
            <button class="popup-order__button-close">Закрыть карточку товара</button>
            <div class="columns-row">
                <div class="column column_s-2 column_m-3 column_l-7">
                <div class="popup-order__form-container">
                    <form action="#" class="form popup-order__form">
                    <div class="form__items">
                        <div class="heading popup-order__form-title">Оформление заказа</div>
                        <div class="form__block">
                        <h3 class="heading heading_level-3">Контактное лицо</h3>
                        <div class="form__item">
                            <input type="text" name="user-name" class="input js-form-element js-form-element-required" placeholder="ФИО" required />
                        </div>
                        <div class="form__item">
                            <input type="email" name="user-email" class="input js-form-element js-form-element-required" placeholder="Электронная почта" required />
                        </div>
                        <div class="form__item">
                            <input type="text" class="input input_phone-pre js-form-element js-form-element-required" value="+7" />
                            <input type="text" name="code-country" class="input input_phone-code js-form-element js-form-element-required" placeholder="Код" maxlength="3" pattern="[0-9]{3}"
                            required />
                            <input type="text" name="mobile-number" class="input input_phone-number js-form-element js-form-element-required" placeholder="Номер" pattern="[0-9]{7}"
                            maxlength="7" required />
                        </div>
                        </div>
                        <div class="form__block">
                        <h3 class="heading heading_level-3">Способ получения заказа</h3>
                        <div class="form__item">
                            <label class="form__label popup-order__form-label" for="delivery-1">
                            <input type="radio" id="delivery-1" name="delivery" class="radio js-form-element"
                                value="devivery-1" />
                            <span class="radio-button popup-order__form-button">Самовывоз</span>
                            </label>
                            <label class="form__label popup-order__form-label" for="delivery-2">
                            <input type="radio" id="delivery-2" name="delivery" class="radio js-form-element"
                                value="devivery-2" checked />
                            <span class="radio-button popup-order__form-button">Доставка</span>
                            </label>
                        </div>
                        </div>
                        <div class="form__block">
                        <h3 class="heading heading_level-3">Адрес</h3>
                        <div class="form__item">
                            <select name="city" class="select select_arrows js-form-element js-form-element-required">
                            <option disabled value="null" class="option-city" selected>Город</option>
                            </select>
                        </div>
                        <div class="form__item">
                            <textarea name="address" class="textarea js-form-element js-form-element-required" maxlength="300" required></textarea>
                        </div>
                        </div>
                        <div class="form__block">
                        <h3 class="heading heading_level-3">Оплата</h3>
                        <div class="form__item">
                            <label for="online" class="form__label">
                            <input type="radio" name="pay" id="online" class="radio js-form-element" value="online" checked />
                            <span class="radio-box"></span>
                            <span class="radio-text">Online-оплата</span>
                            </label>
                        </div>
                        <div class="form__item">
                            <label for="cash" class="form__label">
                            <input type="radio" name="pay" id="cash" class="radio js-form-element" value="cash" />
                            <span class="radio-box"></span>
                            <span class="radio-text">Наличными</span>
                            </label>
                        </div>
                        <div class="form__item">
                            <label for="card" class="form__label">
                            <input type="radio" name="pay" id="card" class="radio js-form-element" value="card" />
                            <span class="radio-box"></span>
                            <span class="radio-text">Картой при получении</span>
                            </label>
                        </div>
                        </div>
                        <div class="form__block">
                        <h3 class="heading heading_level-3">Уведомления</h3>
                        <div class="form__item">
                            <label for="sms" class="form__label">
                            <input type="checkbox" name="sms" id="sms" class="checkbox js-form-element" />
                            <span class="checkbox-box"></span>
                            <span class="checkbox-text">Хочу получать SMS уведомления</span>
                            </label>
                        </div>
                        </div>
                        <div class="form__item">
                        <button type="submit" class="button popup-order__form-button popup-order__form-button_submit">Оформить
                            заказ</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div class="column column_s-0 column_m-0 column_l-1"></div>
                <div class="column column_s-0 column_m-3 column_l-4">
                <div class="popup-order__product">
                    <div class="popup-order__product-card">
                        <div class="popup-order__image-container">
                            <img class="popup-order__image" src="${productInfo.image}" alt="${productInfo.name}" />
                            ${saleLabelHTML}
                        </div>
                        <div class="popup-order__name">${productInfo.name}</div>
                        <div class="popup-order__price">
                            ${salePriceHTML} ${productInfo.price} ₽
                        </div>
                        <div class="popup-order__description">${productInfo.description}</div>
                        <div class="popup-order__sizing-container">
                            ${productSizesGen(productInfo)}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
    //Возвращаем полученный шаблон
    return templateHTML;
  };

  
  