const fibonacci = function(num) {
    return num < 0 ? 'OOPS'
        : num < 3 ? 1 
        : (fibonacci(num - 2) + fibonacci(num - 1));
};

// Do not edit below this line
module.exports = fibonacci;
