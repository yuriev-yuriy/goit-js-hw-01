"use strict";

let total = 0;

do {
  let input = prompt("Введите число");

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
