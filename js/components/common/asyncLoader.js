//Функция ассинхронной загрузки данных от API
export const asyncLoader = async (url) => {
  try {
    const response = await fetch(url);
    let citiesResponse = await response.json();
    return citiesResponse;
  } catch (e) {
    alert("Ошибка в получении данных от сервера");
  }
};
