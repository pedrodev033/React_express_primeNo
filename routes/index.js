var express = require('express');
var router = express.Router();

const { medianprime } = require('../controllers');

router.get('/medianPrime', medianprime);

module.exports = router;
