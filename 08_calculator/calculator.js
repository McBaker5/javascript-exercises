const add = function(a, b) {
	let args = Array.from(arguments);
  const reducer = (previous, current) => previous + current;
  let sum = args.reduce(reducer);
  return sum;
};

const subtract = function() {
	let args = Array.from(arguments);
  const reducer = (previous, current) => previous - current;
  let dif = args.reduce(reducer);
  return dif;
};

const sum = function(nums) {
  if (nums.length === 0) return 0;
  const reducer = (previous, current) => previous + current;
  let sum = nums.reduce(reducer);
  return sum;
};

const multiply = function(nums) {
  const reducer = (previous, current) => previous * current;
  let product = nums.reduce(reducer);
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) return 1;
  return (factorial(num - 1) * num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
