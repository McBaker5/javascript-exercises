const removeFromArray = function(array) {
    // create array of the elements to remove from the main array
    let badElements = Array.prototype.slice.call(arguments, 1);

    retArray = [];
    // add element from array to the array if it is not in badElements
    label1: 
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < badElements.length; j++) {
            if (array[i] === badElements[j]) {
                continue label1;
            }
        }
        retArray.push(array[i]);
    }
    return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
