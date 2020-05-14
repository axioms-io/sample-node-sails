# sample-node-sails
Sails.js APIs sample using [Axioms](https://axioms.io) and [@axioms/express-js](https://github.com/axioms-io/express-js). Secure your Sails APIs using Axioms authentication and authorization.

## Prerequisite

* Node v10.16.0+
* An [Axioms](https://axioms.io) client which can obtain access token after user's authentication and authorization and include obtained access token as bearer in `Authorization` header of all API request sent to Node/Sails application server.

## Setup
Clone this repository,

```
git clone https://github.com/axioms-io/sample-node-sails.git
cd sample-node-sails
npm install
```

## Add Config
Create a `.env` file and add following configs (see `.sample-env`),

```
AXIOMS_DOMAIN=<your-axioms-slug>.axioms.io
AXIOMS_AUDIENCE=<your-axioms-resource-identifier>
```

## Run Dev Server

```
node app.js --port 5000
```

## Test using Postman
Postman collection is included in this repository. Import the collection in your Postman, setup environment variables `host` (i.e. localhost:5000) and `access_token` (you can obtain from your client) and test these APIs.

## Documentation
See [documentation](https://developer.axioms.io/docs/sdks-samples/use-with-apis/nodejs/sails-apis) for `express-js`.

## Deploy to Heroku
You will need to provide Axioms domain and Axioms audience to complete deployment.

<a href="https://heroku.com/deploy?template=https://github.com/axioms-io/sample-node-sails">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy" width="200px">
</a>

[![Edit sample-python-flask](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/axioms-io/sample-node-sails/tree/master/?fontsize=14&hidenavigation=1&theme=light)