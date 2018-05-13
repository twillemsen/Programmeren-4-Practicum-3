let routes = require('express').Router();
let citycontroller = require('../controllers/city.controller');

routes.get('/cities', citycontroller.getAllCities);
routes.get('/cities/:ID', citycontroller.getCityByID);
routes.post('/cities', citycontroller.createCity);
routes.put('/cities/:ID', citycontroller.updateCityByID);

module.exports = routes;