const fibonacci = function (num) {
  if (Number(num) < 1) return "OOPS";

  const numbers = [1, 1];

  for (let i = 2; i < Number(num); i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }

  return numbers[Number(num) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
