const palindromes = function (input) {
  let string = input
    .toLowerCase()
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .split(" ")
    .join("");
  let updString = string.split("").reverse().join("");
  if (updString === string) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
