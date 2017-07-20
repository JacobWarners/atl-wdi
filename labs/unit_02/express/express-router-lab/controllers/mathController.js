const express = require('express');
const router = express.Router();

router.get("/:operator", (res, req) =>{
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    if(req.params.operator === "add"){
        var result = num1+num2;
        router.render("math", result);
    }
    else if(req.params.operator === "subract"){
        var result = num1-num2;
        router.render("math", result);
    }
    else if(req.params.operator === "multiply"){
        var result = num1*num2;
        router.render("math", result);
    }
    else if(req.params.operator === "divide"){
        var result = num1/num2;
        router.render("math", result);
    }
})

module.exports = router;