const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  const startNumber = num1 < num2 ? num1 : num2;
  const endNumber = num1 < num2 ? num2 : num1;

  let result = 0;
  let currentNumber = startNumber;

  while (currentNumber <= endNumber) {
    result += currentNumber;
    currentNumber++;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
