"use strict";

let price;
const deliveryCostChina = 100;
const deliveryCostChili = 250;
const deliveryCostAustralia = 170;
const deliveryCostIndia = 80;
const deliveryCostJamaika = 120;
const country = prompt("введите страну:");

if (country !== null) {
  switch (country.toLowerCase()) {
    case "китай":
      price = deliveryCostChina;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "чили":
      price = deliveryCostChili;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "австралия":
      price = deliveryCostAustralia;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "индия":
      price = deliveryCostIndia;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    case "ямайка":
      price = deliveryCostJamaika;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
} else {
  console.log("отменено пользователем");
}
