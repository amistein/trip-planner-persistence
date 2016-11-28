var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.use('/attractions', require('./attractions'));

router.use('/days', require('./days'));

module.exports = router;