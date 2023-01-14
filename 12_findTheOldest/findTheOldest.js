function findTheOldest(array = []) {
  return array.reduce((oldest, next) => {
    const oldestAge = getAge(oldest);
    const nextAge = getAge(next)
    return oldestAge < nextAge ? oldest = next : oldest
  });
}


function getAge (person) {
  return !person.yearOfDeath ? (new Date()).getFullYear() - person.yearOfBirth : person.yearOfDeath - person.yearOfBirth  
}


// Do not edit below this line
module.exports = findTheOldest;
