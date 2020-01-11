const axios = require('axios');

const { sortByAge, formatData } = require('./data-helpers');

const getCats = async () => {
  try {
    const result = await axios.get(`${process.env.BASE_URL}/cats`);
    const cats = result.data.body;
    const catGroups = [[], [], []];
    cats.forEach((cat) => {
      switch (cat.colour) {
        case 'black':
          catGroups[1].push(cat);
          break;
        case 'ginger':
          catGroups[0].push(cat);
          break;
        default:
          catGroups[2].push(cat);
          break;
      }
    });

    const sortedCats = catGroups
      .map((group) => formatData(group, 'cat', 'descending'))
      .reduce((arr, group) => ([...arr, ...group]), []);

    return sortedCats;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getDogs = async () => {
  try {
    const result = await axios.get(`${process.env.BASE_URL}/dogs`);
    return formatData(result.data.body, 'dog', 'descending');
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getHamsters = async () => {
  try {
    const result = await axios.get(`${process.env.BASE_URL}/hamsters`);
    const hamsters = sortByAge(result.data.body, 'ascending');
    return formatData(hamsters, 'hamster');
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  getCats,
  getDogs,
  getHamsters,
};
