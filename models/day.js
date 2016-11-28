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
// },
// {
//   getterMethods: {
//     createDayObj: function() { return createDay(this)}
//   }
});

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'dayRestaurants'});
Day.belongsToMany(Activity, {through: 'dayActivities'});

module.exports = Day;

