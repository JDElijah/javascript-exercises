const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth; 
};

const findTheOldest = function(people) {
    oldestPerson = people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath); 
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest; 
    }); 
    return oldestPerson;


};

// Do not edit below this line
module.exports = findTheOldest;
