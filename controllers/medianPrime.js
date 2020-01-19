const { medianPrime } = require('../services/');
const { isInt } = require('../utils');
const { MISSING_PARAM_ERROR,
    PARAM_NOT_INT_ERROR,
    PARAM_NEGATIVE_ZERO_ERROR,
    PARAM_VALUE_GT2 } = require('../constants');

const medianprime = (req, res, next) => {
    const { num } = req.query;

    if(!num) {
        return Promise.resolve(res.status(400).json({
            status: 400,
            description: MISSING_PARAM_ERROR
        }));
    }
    
    if(!isInt(num)) {
        return Promise.resolve(res.status(400).json({
            status: 400,
            description: PARAM_NOT_INT_ERROR
        }));
    }

    if(num <= 0) {
        return Promise.resolve(res.status(400).json({
            status: 400,
            description: PARAM_NEGATIVE_ZERO_ERROR
        }));
    }

    if(num < 3) {
        return Promise.resolve(res.status(400).json({
            status: 400,
            description: PARAM_VALUE_GT2
        }));
    }

    return medianPrime(num)
        .then(median => 
            Promise.resolve(res.status(200).json(median)));
};

module.exports = medianprime;
