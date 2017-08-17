var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get("/", (req, res) =>{
   User.find({})
        .then((users) => {
            console.log(users[0]._id);
            res.render('users/index', {
                users: users
            })
        .catch((error) => {
            console.log(`ERROR!!!! ${error}`);
        });
});
// USER CREATE ROUTE
router.get("/new", (res, req) => {
    res.render('users/new');
});

// USER SHOW ROUTE
router.get("/:id", (req, res) =>{
    User.findById(req.params.id)
        .then((user) => {
            response.send(user);
            res.render('users/show', {
                user: user
        })
        .catch((error) => {
            console.log(`ERROR!!!! ${error}`);
        });
});

// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM
router.post('/', (req, res) => {
    const newUser = new User(req.body)
});
// REMOVE AN ITEM

module.exports = router;
