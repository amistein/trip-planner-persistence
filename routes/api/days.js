const express = require('express');
const router = express.Router();
const Hotel = require('../../models/hotel');
const Restaurant = require('../../models/restaurant');
const Activity = require('../../models/activity');
const Day = require('../../models/day');

// get list of all the days
router.get('/', function(req, res, next) {
  Day.findAll({
  //  include: [{all: true}]
  })
  .then(function(data) {
    res.json(data);
  })
  .catch(next);
  // res.send('this is the day route');
});

// get one specfic day
router.get('/:id', function(req, res, next) {
  Day.findById(req.params.id)
  .then(day => res.json(day))
  .catch(next);
})

// delete one specific day
router.delete('/:id', function(req, res, next) {
  Day.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(day => res.send("Deleted!"))
  .catch(next);
})

// create a new day
router.post('/:id', function(req, res, next) {
  Day.create({
    number: req.params.id
  })
  .then(day => res.json(day))
  .catch(next);
})

module.exports = router;