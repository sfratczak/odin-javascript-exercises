const convertToCelsius = function (degrees) {
  if (typeof degrees != "number") return "ERROR";

  const result = ((degrees - 32) * 5) / 9;

  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (degrees) {
  if (typeof degrees != "number") return "ERROR";

  const result = (degrees * 9) / 5 + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
