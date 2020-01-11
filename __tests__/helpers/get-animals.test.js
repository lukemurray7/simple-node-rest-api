const axios = require('axios');

const { getDogs, getCats, getHamsters } = require('../../helpers/get-animals');

const { mockAnimals, mockExpectedDescending, mockExpectedAscending } = require('../mock-data/animal-data');
const { mockCats, mockCatsExpectedResult } = require('../mock-data/cat-data');

jest.mock('axios');
console.error = jest.fn();

const getMockAxiosResult = (data) => ({
  data: {
    body: data,
  },
});

describe('Get Dogs', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should resolve with null if there is an error', async (done) => {
    axios.get.mockReturnValue(Promise.reject(new Error('some error')));

    const result = await getDogs();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
    done();
  });

  it('should sort dogs into descending age, and return the new formatted animal object', async (done) => {
    axios.get.mockReturnValue(Promise.resolve(getMockAxiosResult(mockAnimals)));
    const result = await getDogs();
    expect(result).toEqual(mockExpectedDescending('dog'));
    done();
  });
});

describe('Get Hamsters', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should resolve with null if there is an error', async (done) => {
    axios.get.mockReturnValue(Promise.reject(new Error('some error')));

    const result = await getHamsters();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
    done();
  });

  it('should sort hamsters into ascending age, and return the new formatted animal object', async (done) => {
    axios.get.mockReturnValue(Promise.resolve(getMockAxiosResult(mockAnimals)));
    const result = await getHamsters();
    expect(result).toEqual(mockExpectedAscending('hamster'));
    done();
  });
});

describe('Get Cats', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should resolve with null if there is an error', async (done) => {
    axios.get.mockReturnValue(Promise.reject(new Error('some error')));

    const result = await getCats();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
    done();
  });

  it('should sort cats into groups of colour, ginger - black - others, each group sorted by age, and return the formtted object', async (done) => {
    axios.get.mockReturnValue(Promise.resolve(getMockAxiosResult(mockCats)));
    const result = await getCats();
    expect(result).toEqual(mockCatsExpectedResult);
    done();
  });
});
