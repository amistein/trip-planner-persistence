const Sequelize = require('sequelize');
const db = require('./_db');
const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');

//const createDay = require('../public/js/day').create;

const Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
{
  hooks: {
    afterDestroy: function(day) {
      Day.findAll({
        where: {number: {
            $gt: day.number
          }
        }
      })
      .then((foundDays) => {
        foundDays.forEach((day) => {
          day.decrement('number', {by: 1});
        })
      })
    }
  }
});

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'dayRestaurants'});
Day.belongsToMany(Activity, {through: 'dayActivities'});

module.exports = Day;

