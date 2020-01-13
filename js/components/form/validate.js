//Функция валидации полей формы и стилевого оформления 
export const validate = elements => {
  for (let element of elements) {
    element.addEventListener(
      "invalid",
      () => {
        element.classList.add("form-error");
      },
      false
    );
    element.addEventListener("blur", () => {
      element.checkValidity();
    });
  }
};
