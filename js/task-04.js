"use strict";

let credits = 23580;
const pricePerDroid = 3000;
const droidQuantity = prompt("Сколько дроидов вы хотите купить?");
if (droidQuantity === null) {
  console.log("отменено пользователем");
} else {
  const totalPrice = droidQuantity * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${droidQuantity} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
