const findTheOldest = function(people) {
    let oldest = people.reduce((previousPerson, currentPerson) => {
        return ((getAge(previousPerson)) > getAge(currentPerson)) ? previousPerson
            : currentPerson;
    });
    return oldest;
};

const getAge = function(person) {
    let currentYear = new Date().getFullYear();;
    return (!person.yearOfDeath) ? (currentYear- person.yearOfBirth)
        : (person.yearOfDeath - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
