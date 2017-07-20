const express = require('express');
const router = express.Router();

router.get("/:name", (res, req) => {
    var greet = req.query.greeting;
    res.render("greeting", greet);
});

module.exports = router;