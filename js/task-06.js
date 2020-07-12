"use strict";

let total = 0;
let input;

do {
  input = prompt("Введите число");
  if (input !== null) {
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
      continue;
    }
    total += input;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
