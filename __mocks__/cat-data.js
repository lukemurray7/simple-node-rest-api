const mockCats = [
  {
    forename: 'bob',
    dateOfBirth: '2015-01-01',
    image: { url: 'mockurl' },
    surname: 'smith',
    colour: 'white',
  },
  {
    forename: 'luke',
    dateOfBirth: '2016-01-01',
    image: { url: 'mockurl' },
    surname: 'murray',
    colour: 'ginger',
  },
  {
    forename: 'john',
    dateOfBirth: '2010-01-01',
    image: { url: 'mockurl' },
    surname: 'doe',
    colour: 'ginger',
  },
  {
    forename: 'sarah',
    dateOfBirth: '2008-06-01',
    image: { url: 'mockurl' },
    surname: 'silverman',
    colour: 'black',
  },
  {
    forename: 'alice',
    dateOfBirth: '2008-05-01',
    image: { url: 'mockurl' },
    surname: 'cooper',
    colour: 'black',
  },
  {
    forename: 'mr',
    dateOfBirth: '2018-01-01',
    image: { url: 'mockurl' },
    surname: 'fluffy',
    colour: 'ginger',
  },
];

const mockCatsExpectedResult = [
  {
    name: 'john doe',
    age: '10 years 0 months',
    image: 'mockurl',
    type: 'cat',
  },
  {
    name: 'luke murray',
    age: '4 years 0 months',
    image: 'mockurl',
    type: 'cat',
  },
  {
    name: 'mr fluffy',
    age: '2 years 0 months',
    image: 'mockurl',
    type: 'cat',
  },
  {
    name: 'alice cooper',
    age: '11 years 8 months',
    image: 'mockurl',
    type: 'cat',
  },
  {
    name: 'sarah silverman',
    age: '11 years 7 months',
    image: 'mockurl',
    type: 'cat',
  },
  {
    name: 'bob smith',
    age: '5 years 0 months',
    image: 'mockurl',
    type: 'cat',
  },
];


module.exports = {
  mockCats,
  mockCatsExpectedResult,
};
