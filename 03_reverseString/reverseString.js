const reverseString = function (string) {
  let arr = string.split("");
  let revArr = arr.reverse();
  let revString = revArr.join("");
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
