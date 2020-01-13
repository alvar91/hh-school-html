import { asyncLoader } from "../common/asyncLoader";

//Функция для получения городов из API
export const selectTemplateGen = (citySelect, areaNum = 21) => {
    asyncLoader("https://api.hh.ru/areas/113").then(citiesResponse => {
    const areas = citiesResponse.areas[areaNum].areas.slice(0, 10);
    for(let i = 1; i < areas.length; i++){
        citySelect.innerHTML += `
        <option value="${areas[i].name}" class="option-city">${areas[i].name}</option>`;
    }
});
};