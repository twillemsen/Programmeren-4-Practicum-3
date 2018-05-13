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
    }
}