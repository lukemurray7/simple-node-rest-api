const { lambdaResponse } = require('../../helpers/lambda-response');

describe('Lambda response helper', () => {
  it('should return an error object for an error', () => {
    const result = lambdaResponse(new Error('some error'), null);
    expect(result).toEqual({
      statusCode: 500,
      body: JSON.stringify({ message: 'some error' }),
    });
  });

  it('should return a success object with data for a successful response', () => {
    const result = lambdaResponse(null, [1, 2, 3]);
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify({ data: [1, 2, 3] }),
    });
  });
});
