# Node-Express-React Project
This is a node-express api along with react frontend

## Installation
To install all the dependencies for node server run the below command in root directory:

```bash
npm install
```

To setup the frontend react app browse to **/views** and run below command:

```bash
npm install
```

## Run the server

To run backend server run command **npm start** in the root directory

To run frontend app run command **npm start** in the **/views** directory


## Tests
To run backend test suite run **npm test** in the root directory

To run frontend test suite run **CI=true npm test** in the **/views** directory

## Endpoint

GET **/medianprime**?num=10 


## Directory Structure

**/views**: the frontend react project

**/routes**: the routes for the node server

**/controllers**: the controller for the endpoint in routes. Controller calls the service

**/services**: the service which is being called by controller

**/controller**: the tests for the controllers, services and the utility function

**constants.js**: the static error handling messages used in the controller

**utils.js**: the helper utility functions being used in the project
# React_express_primeNo
