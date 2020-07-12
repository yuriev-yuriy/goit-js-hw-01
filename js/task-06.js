"use strict";

let total = 0;
let input;

do {
  input = prompt("Введите число");
  if (input !== null) {
    input = Number(input);

    total += input;
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
