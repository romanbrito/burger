var express = require("express");
var router = express.Router();

// model
var burger = require("../models/burger.js");

// routes

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    console.log(req.body.burger_name);

    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function () {
        res.redirect("/");
    });
});
module.exports = router;