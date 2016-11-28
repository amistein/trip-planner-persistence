// 'use strict'
/* global $ attractionsModule optionsModule */

let hotels, restaurants, activities;

// let hotelsPromise = $.get('/api/hotels')
// // .then(function (response) {
// //   hotels = response;
// // })
// .catch(console.error.bind(console));

// let restaurantsPromise = $.get('/api/restaurants')
// // .then(function (response) {
// //   restaurants = response;
// // })
// .catch(console.error.bind(console));

// let activitiesPromise = $.get('/api/activities')
// // .then(function (response) {
// //   activities = response;
// // })
// .catch(console.error.bind(console));

Promise.all([$.get('/api/hotels'), $.get('/api/restaurants'), $.get('/api/activities')])
.then(data => {
  [hotels, restaurants, activities] = data;
  optionsModule.load();
  attractionsModule.load();
})
.catch(console.error);
