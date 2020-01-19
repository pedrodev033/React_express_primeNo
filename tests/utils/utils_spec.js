const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const { isInt } = require('../../utils');

describe('Utils Tests', () => {
    context('check if no is integer or not', () => {
        it('should return true if no is integer', () => {
            expect(isInt(5)).to.be.true;
        });
        it('should return true if no is negative integer', () => {
            expect(isInt(-5)).to.be.true;
        });
        it('should return true if no is zero', () => {
            expect(isInt(0)).to.be.true;
        });
        it('should return false if value is alphabet', () => {
            expect(isInt('a')).to.be.false;
        });
    });
});
