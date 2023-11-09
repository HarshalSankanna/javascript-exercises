const repeatString = function (inputString, times) {
  if (times < 0) return "ERROR";
  let finalString = "";
  for (let i = 0; i < times; i++) {
    finalString = finalString.concat(inputString);
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
