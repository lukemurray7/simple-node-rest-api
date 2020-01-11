const moment = require('moment');

const getAge = (dateString) => {
  const monthsDifference = moment().diff(moment(dateString), 'months');
  const years = Math.floor(monthsDifference / 12);
  const months = monthsDifference % 12;

  return `${years} years ${months} months`;
};

const sortByAge = (array, order) => {
  if (order === 'descending') {
    return array.sort((a, b) => moment(a.dateOfBirth) - moment(b.dateOfBirth));
  }
  return array.sort((a, b) => moment(b.dateOfBirth) - moment(a.dateOfBirth));
};

const formatData = (array, type, order) => sortByAge(array, order)
  .map((animal) => ({
    name: `${animal.forename} ${animal.surname}`,
    type,
    age: getAge(animal.dateOfBirth),
    image: animal.image.url,
  }));

module.exports = {
  formatData,
  sortByAge,
};
