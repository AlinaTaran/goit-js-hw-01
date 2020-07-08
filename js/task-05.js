// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
//  Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

"use strict";

const userInput = prompt("Введите вашу страну");
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

if (userInput !== null) {
  const normalizedInput = userInput.toLowerCase();
  switch (normalizedInput) {
    case "китай":
      alert(`Доставка в ${normalizedInput} будет стоить ${priceChina} кредитов`);
      break;
    case "чили":
      alert(`Доставка в ${normalizedInput} будет стоить ${priceChile} кредитов`);
      break;
    case "австралия":
      alert(`Доставка в ${normalizedInput} будет стоить ${priceAustralia} кредитов`);
      break;
    case "индия":
      alert(`Доставка в ${normalizedInput} будет стоить ${priceIndia} кредитов`);
      break;
    case "ямайка":
      alert(`Доставка в ${normalizedInput} будет стоить ${priceJamaica} кредитов`);
      break;
    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
}
