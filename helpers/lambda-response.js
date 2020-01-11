module.exports.lambdaResponse = (error, body) => {
  const statusCode = error ? 500 : 200;

  const responseBody = error
    ? { message: error.message || 'Sorry, there was a problem executing the request' }
    : {
      data: body,
    };

  return {
    statusCode,
    body: JSON.stringify(responseBody),
  };
};
