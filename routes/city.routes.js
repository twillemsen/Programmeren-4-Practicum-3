let routes = require('express').Router();
let citycontroller = require('../controllers/city.controller');

routes.get('/cities', citycontroller.getAllCities);

module.exports = routes;