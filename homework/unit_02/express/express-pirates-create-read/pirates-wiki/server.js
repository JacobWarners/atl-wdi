const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
app.set("view engine", "hbs");

const piratesController = require('./controllers/pirates');

app.use( logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/pirates/', piratesController);

var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log('server is up, listening on port: ' + port);
});