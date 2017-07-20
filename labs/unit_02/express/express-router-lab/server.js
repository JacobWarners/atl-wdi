const express = require('express');
const hbs = require('hbs');

var app = express();
app.set("view engine","views");

const mathController = require('./controllers/mathController');
app.use('/math', mathController);

const greetingController = require('./controllers/greetingController');
app.use('/greeting', greetingController);

const reverseController = require('./controllers/reverseController');
app.use('/reverse', greetingController);

var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`server is up, listening on port: ${port}`);
});