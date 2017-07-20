const express = require('express');
const hbs = require('hbs');

var app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/topping/:type", (req, res) => {
    res.render("toppings", {
        topping: req.params.type
    });
});

app.get("/order/:amount/:size", (req, res) => {
    res.render("order", {
        amount: req.params.amount,
        size: req.params.size
    });
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`server is up, listening on port: ${port}`);
});