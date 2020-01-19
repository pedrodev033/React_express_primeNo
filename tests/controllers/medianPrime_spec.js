const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const resSpy = sinon.spy();

const MockResponse = require('./fixtures/mock_response');
const medianPrimeService = require('../../services/primeNumbers');
const medianController = require('../../controllers/medianPrime');

const { MISSING_PARAM_ERROR, PARAM_NOT_INT_ERROR, PARAM_NEGATIVE_ZERO_ERROR, PARAM_VALUE_GT2 } = require('../../constants')

describe('Controller Tests:', () => {
    let apiRequest;
    let apiResponse;
    let controllerResult;
    let expectedRes;

    let medianPrimeServiceStub;
    let medianPrimeServiceStubResponse;
    beforeEach(() => {
        medianPrimeServiceStub = sinon.stub(medianPrimeService, 'medianPrime');
        medianPrimeServiceStub.returns(Promise.resolve(medianPrimeServiceStubResponse));
    });
    
    afterEach(() => {
        medianPrimeServiceStub.restore();
        resSpy.resetHistory();
    });

    context('Prime Numbers Median when num is not provided', () => {
        beforeEach(() => {
            apiRequest = { query: { } };
            apiResponse = new MockResponse(resSpy);
        
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 400 if num is not provided in the request', () => controllerResult.then(() => {
            expect(resSpy.firstCall.args[0].status).to.equal(400);
            expect(resSpy.firstCall.args[0].description).to.equal(MISSING_PARAM_ERROR);
        }));
    });

    context('Prime Numbers Median when num is empty', () => {
        beforeEach(() => {
            apiRequest = { query: { num: '' } };
            apiResponse = new MockResponse(resSpy);
        
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 400 if num is empty', () => controllerResult.then(() => {
            expect(resSpy.firstCall.args[0].status).to.equal(400);
            expect(resSpy.firstCall.args[0].description).to.equal(MISSING_PARAM_ERROR);
        }));
    });

    context('Prime Numbers Median when num is not an integer', () => {
        beforeEach(() => {
            apiRequest = { query: { num: 'a' } };
            apiResponse = new MockResponse(resSpy);
        
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 400 if num is not an integer', () => controllerResult.then(() => {
            expect(resSpy.firstCall.args[0].status).to.equal(400);
            expect(resSpy.firstCall.args[0].description).to.equal(PARAM_NOT_INT_ERROR);
        }));
    });

    context('Prime Numbers Median when num is negative no.', () => {
        beforeEach(() => {
            apiRequest = { query: { num: -6 } };
            apiResponse = new MockResponse(resSpy);
        
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 400 if num is negative no.', () => controllerResult.then(() => {
            expect(resSpy.firstCall.args[0].status).to.equal(400);
            expect(resSpy.firstCall.args[0].description).to.equal(PARAM_NEGATIVE_ZERO_ERROR);
        }));
    });

    context('Prime Numbers Median when num is positive but value is 1', () => {
        beforeEach(() => {
            apiRequest = { query: { num: 1 } };
            apiResponse = new MockResponse(resSpy);
        
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 400 if num is positive but value is 1', () => controllerResult.then(() => {
            expect(resSpy.firstCall.args[0].status).to.equal(400);
            expect(resSpy.firstCall.args[0].description).to.equal(PARAM_VALUE_GT2);
        }));
    });

    context('Prime Numbers Median when num is greater than 1', () => {
        beforeEach(() => {
            apiRequest = { query: { num: 10 } };
            apiResponse = new MockResponse(resSpy);
            expectedRes = { median: [3,5] };
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 200 if num is greater than 1 with median array', () => controllerResult.then(() => {
            expect(resSpy.firstCall.thisValue.statusCode).to.equal(200);
            expect(resSpy.firstCall.args[0]).to.eql(expectedRes);
        }));
    });

    context('Prime Numbers Median when num is greater than 1', () => {
        beforeEach(() => {
            apiRequest = { query: { num: 100 } };
            apiResponse = new MockResponse(resSpy);
            expectedRes = { median: 41 };
            controllerResult = medianController(apiRequest, apiResponse);
        });
        it('should return 200 if num is greater than 1 with integer median', () => controllerResult.then(() => {
            expect(resSpy.firstCall.thisValue.statusCode).to.equal(200);
            expect(resSpy.firstCall.args[0]).to.eql(expectedRes);
        }));
    });
});