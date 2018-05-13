let db = require('../config/db.improved');

module.exports = {
    getAllCities(req, res, next) {
        console.log('getAllCities called');

        db.query('SELECT * FROM city', (error, rows, fields) => {
            res.status(200).json({
                status: {
                    query: 'OK'
                },
                result: rows
            }).end();
        });
    },

    getCityByID(req, res, next) {
        console.log('getCityByID called');

        const ID = req.params.ID;

        db.query('SELECT * FROM city WHERE ID=' + ID, (error, rows, fields) => {
            res.status(200).json({
                status: {
                    query: 'OK'
                },
                result: rows
            }).end();
        });
    },

    createCity(req, res, next) {
        console.log('createCity called');

        let city = req.body;

        let query = {
            sql: 'INSERT INTO city(ID, Name, CountryCode, District, Population) VALUES (?, ?, ?, ?, ?)',
            values: [ city.ID, city.Name, city.CountryCode, city.District, city.Population ],
            timeout: 2000
        }

        db.query(query, (error, rows, fields) => {
            res.status(200).json({
                status: {
                    query: 'OK'
                },
                result: rows
            }).end();
        });
    },

    updateCityByID(req, res, next) {
        console.log('updateCityById called');

        let city = req.body;
        let city_ID = req.params.ID;

        let query = {
            sql: 'UPDATE city SET Name=? , CountryCode=? , District=?, Population=? WHERE ID=?',
            values: [ city.Name, city.CountryCode, city.District, city.Population, city_ID ],
            timeout: 2000
        }

        db.query(query, (error, rows, fields) => {
            res.status(200).json({
                status: {
                    query: 'OK'
                },
                result: rows
            }).end();
        });
    }
}