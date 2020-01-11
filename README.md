# Animal Adoption Tech Test

To deploy this simple api follow the steps below. You will need nodeJS and the serverless framework on your local machine.

1. clone the repository

2. yarn install (or use npm)

3. To run the tests run `yarn test`

4. run `yarn deploy`

5. The api url will be printed into the console after successful deploy.

6. If you don't want to deploy the endpoint, you can call one I have already deployed using the url `https://5ldacrg550.execute-api.eu-west-1.amazonaws.com/dev/adoptions`


## Endpoints

The API URL will be in the format `https://<API_GATEWAY_ID>.execute-api.eu-west-1.amazonaws.com/<STAGE>/<PATH>`
You can find the `API_GATEWAY_ID` in the AWS console, the stage will be `dev` unless specified otherwise.

### List animals for adoption

* http method: GET

* path: /adoptions

