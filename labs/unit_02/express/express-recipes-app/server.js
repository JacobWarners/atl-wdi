const express = require('express');
const recipesController = require("./controllers/recipesController");

var app = express();

app.set("view engine", "hbs");

app.use("/recipes", recipesController);

var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log('server is up, listening on port: ' + port);
});