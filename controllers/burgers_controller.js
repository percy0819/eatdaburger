var burger = require("../models/burger.js");


module.exports = function(app) {


    // get route -> index
    app.get("/", function(req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function(req, res) {
        // express callback response by calling burger.selectAllBurger
        burger.all(function(burgerData) {
            // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
            res.render("index", { burger_data: burgerData });
        });
    });

    // post route -> back to index
    app.post("/burgers/create", function(req, res) {
        // takes the request object using it as input for buger.addBurger

        if (req.body.burger_name == "") {
            console.log("No payload")
        } else {
            burger.create(req.body.burger_name, function(result) {
                // wrapper for orm.js that using MySQL insert callback will return a log to console,
                // render back to index with handle
                console.log(result);
                res.redirect("/");
            });
        }
    });

    // put route -> back to index
    app.put("/burgers/update", function(req, res) {
        burger.update(req.body.burger_id, function(result) {
            // wrapper for orm.js that using MySQL update callback will return a log to console,
            // render back to index with handle
            console.log(result);
            res.redirect("/");
        });
    });
    // delete route -> back to index
    app.put("/burgers/delete", function(req, res) {
        console.log("deleting a burger")
        burger.delete(req.body.burger_id, function(result) {
            // wrapper for orm.js that using MySQL delete callback will return a log to console,
            // render back to index with handle
            console.log(result);
            res.redirect("/");
        });
    });
}