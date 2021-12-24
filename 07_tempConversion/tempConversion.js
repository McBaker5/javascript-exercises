const ftoc = function(fahrenheit) {
  let celsius = fahrenheit - 32;
  let multiplier = 5/9;
  celsius *= multiplier;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(celsius) {
  let multiplier = 9/5;
  let fahrenheit = celsius * multiplier;
  fahrenheit += 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
