const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const { isPrime, primeNos, median, medianPrime } = require('../../services/primeNumbers');

describe('Prime Number Median Service Tests', () => {
    context('check if no is prime', () => {
        it('should return true if no is prime', () => {
            expect(isPrime(5)).to.be.true;
        });
        it('should return false if no is not prime', () => {
            expect(isPrime(6)).to.be.false;
        });
    });

    context('return prime numbers', () => {
        it('should return prime numbers when num is provided', () => {
            expect(primeNos(5)).to.eql([2,3]);
        });
    });

    context('return median of prime numbers array', () => {
        it('should return single median when prime numbers array is provided', () => {
            expect(median([2,3,5])).to.equal(3);
        });
    });

    context('return median object with value', () => {
        it('should return object with median key and single value when prime number array has odd count', () => medianPrime(6).then((res) => {
            expect(res).to.eql({ median: 3 });
        }));
        it('should return object with median key and array value when prime number array has even count', () => medianPrime(8).then((res) => {
            expect(res).to.eql({ median: [3,5] });
        }));
    });
});
