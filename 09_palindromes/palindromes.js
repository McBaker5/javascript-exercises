const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.split('');
    // make the string into an array, then filter it to be only alphabetical stuffs
    str = str.filter(isAlphabetical);
    // reverse the array, then check if the array and reversed array are equal
    let rev = ReverseString(str);
    str = str.join('');
    rev = rev.join('');
    console.log('rev: ' + rev + '\nstr: ' + str);
    return (rev === str) ? true : false;
};

const isAlphabetical = function (character) {
    return character.match(/[a-z]/);
}

const ReverseString = function (str) {
    let rev = []; 
    for (let i = str.length - 1; i >= 0; i--) {
        rev.push(str[i]);
    }
    return rev;
}

// Do not edit below this line
module.exports = palindromes;
