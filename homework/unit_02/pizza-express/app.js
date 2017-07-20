const express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Pizza Express!");
});

app.get("/topping/:type", (req, res) => {
    res.send(`${req.params.type} pizza! Good choice!`);
});

app.get("/order/:amount/:size", (req, res) => {
    res.send(`Your order of ${req.params.amount} ${req.params.size} pizza(s) will be ready in a moment!`);
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`server is up, listening on port: ${port}`);
});