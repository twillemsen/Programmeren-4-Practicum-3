const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const city_routes = require('./routes/city.routes');
// const country_routes
// const ApiError
const config = require('./config/config');

const port = process.env.PORT || config.webPort;

let app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/v1', city_routes);

app.get('/test', function(req, res, next) {
    res.status(200).json({
        "test": "Dit is een test"});
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});