const { lambdaResponse } = require('../helpers/lambda-response');
const { getCats, getDogs, getHamsters } = require('../helpers/get-animals');

module.exports.handler = async () => {
  try {
    const promises = [getDogs(), getCats(), getHamsters()];
    const animals = await Promise.all(promises);

    /*
      If every result is null, it means all the requests failed, so return an error.
    */
    if (animals.every((x) => x === null)) {
      return lambdaResponse(new Error('There was a problem getting the data'), null);
    }

    /*
      Clean the responses to remove any requests that errored
      Unify the data into a single list.
    */
    const cleanResponses = animals
      .filter((x) => x)
      .reduce((acc, el) => [...acc, ...el]);

    return lambdaResponse(null, cleanResponses);
  } catch (error) {
    return lambdaResponse(error, null);
  }
};
