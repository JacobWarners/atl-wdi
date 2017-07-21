const express = require('express');
const router = express.Router();
var pirates = require('../models/pirates.js');

router.get("/", (req, res) => {
    res.render("pirates/index")
});

router.get("/new", (req, res) => {
    res.render("pirates/new")
});

router.get("/:id", (req, res) => {
    res.render("pirates/show")
});



module.exports = router;