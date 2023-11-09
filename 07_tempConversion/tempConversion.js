const convertToCelsius = function (Fahrenheit) {
  let Celsius = ((Fahrenheit - 32) * 5) / 9;
  let result = Math.round(Celsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function (Celsius) {
  let Fahrenheit = (Celsius * 9) / 5 + 32;
  let result = Math.round(Fahrenheit * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
