const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function (array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function (base, power) {
  let result = base;
  for (i = 1; i < power; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  let factorial = 1;
  for (i = a; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
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
