const express = require('express');
const router = express.Router();
var pirates = require('../models/pirates.js');

router.get("/", (req, res) => {
    res.render("pirates/index", {
        pirates: pirates
    });
});

router.get("/new", (req, res) => {
    res.render("pirates/new", {
        pirates: pirates
    });
});

router.get("/:id", (req, res) => {
    var id = req.params.id;
    res.render("pirates/show", {
        pirates: pirates[id]
    });
});



module.exports = router;