const express = require('express');
const router = express.Router();
var pirates = require('../models/pirates.js');

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/:id", (req, res) => {

});



module.exports = router;