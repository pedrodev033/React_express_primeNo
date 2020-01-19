class MockResponse {
    constructor(spy) {
      this.resSpy = spy;
      this.statusCode = '';
      this.locals = {};
    }
  
    json(data) {
      return this.resSpy ? this.resSpy(data) : null;
    }
  
    status(resStatus) {
      this.statusCode = resStatus;
      return this;
    }
  
    getStatus() {
      return this.statusCode;
    }
  }
  
module.exports = MockResponse;  