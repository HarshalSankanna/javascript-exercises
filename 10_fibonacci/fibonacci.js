const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let series = [1, 1];
  for (let i = 2; i <= num; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
