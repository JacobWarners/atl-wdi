const express = require('express');
const router = express.Router();
var data = require("../recipes.js");

router.get("/", (req, res) => {
    res.render("/recipes/index", {
        recipes: data.seededRecipes
    });
});
module.exports = router;