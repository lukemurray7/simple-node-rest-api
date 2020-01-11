# Animal Adoption Tech Test

To deploy this simple api follow the steps below. You will need nodeJS and the serverless framework on your local machine.

1. clone the repository

2. yarn install (or use npm)

3. run `yarn deploy`

4. The api url will be printed into the console after successful deploy.

5. If you don't want to deploy the endpoint, you can call one I have already deployed using the url `https://g4r0x9c5w1.execute-api.eu-west-1.amazonaws.com/dev/adoptions`

6. To run the tests run `yarn test`


## Endpoints

The API URL will be in the format `https://<API_GATEWAY_ID>.execute-api.eu-west-1.amazonaws.com/<STAGE>/<PATH>`
You can find the `API_GATEWAY_ID` in the AWS console, the stage will be `dev` unless specified otherwise.

### List animals for adoption

* http method: GET

* path: /adoptions

