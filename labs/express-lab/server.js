const hbs = require("hbs");

const express = require("express");
var app = express();
app.set("view engine","hbs");

app.use(express.static(__dirname+"/public/"));

app.get("/shows", (req, res) => {
    var shows = ["Bob's Burgers", "Doctor Who", "Battlestar Galatica", "Family Guy", "How I Met Your Mother"];

    res.render("shows", {
        data: shows
    }
    );
})

app.get("/:name"), (req, res) => {
    res.render("404");
}

const express = require('express');
var app = express();



var port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`server is up, listening on port: ${port}`);
});