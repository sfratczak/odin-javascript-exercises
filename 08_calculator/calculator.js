const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((result, item) => result + item, 0);
};

const multiply = function (array) {
  return array.reduce((result, item) => result * item, 1);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (num) {
  if (num === 0) return 1;

  const numbers = [];

  for (let i = 1; i <= num; i++) {
    numbers.push(i);
  }

  return numbers.reduce((result, item) => result * item, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
