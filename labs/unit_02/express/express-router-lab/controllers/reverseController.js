const express = require('express');
const router = express.Router();

router.get("/", (res, req) => {
    var wordToReverse = req.query.word;
    var array = wordToReverse.split();
    array.reverse();
    var reversedWord = array.toString();
    router.render("reverse", reversedWord);
    
});

module.exports = router;