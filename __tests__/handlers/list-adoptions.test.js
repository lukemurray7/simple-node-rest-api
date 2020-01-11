const { handler } = require('../../handlers/list-adoptions');
const { getCats, getDogs, getHamsters } = require('../../helpers/get-animals');

jest.mock('../../helpers/get-animals');

describe('Create handler', () => {
  it('should call getCats, getDogs and get hamsters once', async (done) => {
    getCats.mockReturnValue(Promise.resolve(null));
    getDogs.mockReturnValue(Promise.resolve(null));
    getHamsters.mockReturnValue(Promise.resolve(null));

    await handler();
    expect(getHamsters).toHaveBeenCalledTimes(1);
    expect(getDogs).toHaveBeenCalledTimes(1);
    expect(getCats).toHaveBeenCalledTimes(1);
    done();
  });

  it('If all the promise results are null it should throw a 500 error', async (done) => {
    getCats.mockReturnValue(Promise.resolve(null));
    getDogs.mockReturnValue(Promise.resolve(null));
    getHamsters.mockReturnValue(Promise.resolve(null));

    const result = await handler();
    expect(result).toEqual({
      statusCode: 500,
      body: JSON.stringify({ message: 'There was a problem getting the data' }),
    });
    done();
  });

  it('If at least one of the promise results is a success it should return that data with a 200 status code', async (done) => {
    const mockDogResult = [{ type: 'dog', age: 26 }];

    getCats.mockReturnValue(Promise.resolve(null));
    getDogs.mockReturnValue(Promise.resolve(mockDogResult));
    getHamsters.mockReturnValue(Promise.resolve(null));

    const result = await handler();
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({ data: mockDogResult }),
    });
    done();
  });

  it('should return the unified data in the correct order if more than one result is successful, with a 200 status code', async (done) => {
    const mockDogResult = [{ type: 'dog', age: 10 }];
    const mockCatResult = [{ type: 'cat', age: 2 }];
    const mockHamsterResult = [{ type: 'hamster', age: 4 }];

    getCats.mockReturnValue(Promise.resolve(mockCatResult));
    getDogs.mockReturnValue(Promise.resolve(mockDogResult));
    getHamsters.mockReturnValue(Promise.resolve(mockHamsterResult));

    const result = await handler();
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({ data: [...mockDogResult, ...mockCatResult, ...mockHamsterResult] }),
    });
    done();
  });
});
