// //import express and burger.js, then create router
// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");

// //Routes
// //Homepage
// router.get("/", function(req, res) {
//     burger.all(function(burger_data) {
//         console.log(burger_data);
//         res.render("index", {burger_data});
//     });  
// });

// router.put("/burgers/update", function(req, res) {
//     burger.update(req.body.burger_id, function(result) {
//         console.log(result);
//         res.redirect("/");
//     });
// });


// router.post("/burgers/create", function(req, res) {
//     burger.create(req.body.burger_name, function(result) {
//         res.redirect("/");
//     })
// })


// // Exporting router
// module.exports = router;

// Import Express
var express = require("express");

// Creating router
var router = express.Router();

// Import burger.js
var burger = require("../models/burger.js");


/***************** SETTING UP ROUTES *****************/

// Homepage
router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        res.render("index", {burger_data});
    });  
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});


router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    })
})


// Exporting router
module.exports = router;