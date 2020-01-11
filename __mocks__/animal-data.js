const mockAnimals = [
  {
    forename: 'bob',
    dateOfBirth: '2015-01-01',
    image: { url: 'mockurl' },
    surname: 'smith',
  },
  {
    forename: 'alice',
    dateOfBirth: '2016-01-01',
    image: { url: 'mockurl' },
    surname: 'cooper',
  },
  {
    forename: 'mr',
    dateOfBirth: '2012-01-01',
    image: { url: 'mockurl' },
    surname: 'fluffy',
  },
];

const mockExpectedDescending = (type) => ([
  {
    name: 'mr fluffy',
    image: 'mockurl',
    age: '8 years 0 months',
    type,
  },
  {
    name: 'bob smith',
    image: 'mockurl',
    age: '5 years 0 months',
    type,
  },
  {
    name: 'alice cooper',
    image: 'mockurl',
    age: '4 years 0 months',
    type,
  },
]);

const mockExpectedAscending = (type) => ([
  {
    name: 'alice cooper',
    image: 'mockurl',
    age: '4 years 0 months',
    type,
  },
  {
    name: 'bob smith',
    image: 'mockurl',
    age: '5 years 0 months',
    type,
  },
  {
    name: 'mr fluffy',
    image: 'mockurl',
    age: '8 years 0 months',
    type,
  },
]);


module.exports = {
  mockAnimals,
  mockExpectedAscending,
  mockExpectedDescending,
};
