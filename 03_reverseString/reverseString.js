const reverseString = function(str) {
    ret = ''
    for (i = str.length - 1; i >= 0; i--) {
        ret += str.charAt(i);
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
