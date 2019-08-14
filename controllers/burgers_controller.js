var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

// express.static('public');

// app.use(express.static('public'));

// http://localhost:808/assets/img/cheeseburger-34315.png;

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    })
})

module.exports = router;