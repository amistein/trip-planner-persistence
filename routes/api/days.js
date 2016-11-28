const express = require('express');
const router = express.Router();
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');

router.get('/', function(req, res, next) {
  Day.findAll({
    // include: [{all: true}]
  })
  .then(function(data) {
    res.json(data);
  });
  // res.send('this is the day route');
});


module.exports = router;