# Animal Adoption Tech Test

To deploy this simple api follow the steps below. You will need nodeJS and the serverless framework on your local machine.

1. clone the repository

2. yarn install (or use npm)

3. To run the tests run `yarn test`

4. If you want to deploy the endpoint you will need to configure an env file which stores the API url required to fetch the animal data. An example can be seen in the sample-env.yml file.

Create a env.yml file at the root of the project - and add `BASE_API_URL: 'my api'` with the correct api url.

5. run `yarn deploy`


## Endpoints

The API URL will be in the format `https://<API_GATEWAY_ID>.execute-api.eu-west-1.amazonaws.com/<STAGE>/<PATH>`
You can find the `API_GATEWAY_ID` in the AWS console, the stage will be `dev` unless specified otherwise.

### List animals for adoption

* http method: GET

* path: /adoptions

* no body or headers required
