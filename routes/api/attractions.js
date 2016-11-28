var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels);
  })
});

router.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurants) {
    res.json(restaurants);
  })
});

router.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activities) {
    res.json(activities);
  })
});

module.exports = router;
