// returns boolean
// function to check if a number is prime or not
function isPrime(num) {
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

// returns array of numbers
// function to find all the prime numbers less than the n
function primeNos(max) {
    const primesArr = [];
    for(let x = 0; x < max; x++) {
        primesArr[x] = true;
    }

    for (let i = 2; i < Math.sqrt(max); i++) {
      if (primesArr[i]) {
        for (let j = Math.pow(i, 2); j < max; j += i) {
          primesArr[j] = false;
        }
      }
    }

    return primesArr.reduce((primes, isPrime, i) => {
      if (isPrime && i > 1) {
        primes.push(i);
      }
  
      return primes;
    }, []);
}

// returns integer
// function to find median of an array. Note: array should have odd no. of integers
function median(arr) {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

// returns promise object
// function to return an object with median as key and value as either integer or array of 2 integers
function medianPrime(num) {
    const primeNosArr = primeNos(num);
    const primeNosArrCount = primeNosArr.length;

    if(primeNosArrCount % 2 === 0) {
        const median1 = primeNosArrCount/2 - 1;
        const median2 = primeNosArrCount/2;
        return Promise.resolve({
            median: [primeNosArr[median1], primeNosArr[median2]]
        });
    } else {
        return Promise.resolve({
            median: median(primeNosArr)
        });
    }
}

module.exports = {
    isPrime,
    primeNos,
    median,
    medianPrime
};