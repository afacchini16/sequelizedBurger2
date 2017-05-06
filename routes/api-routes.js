var db = require("../models");
// var sequelize = require('sequelize');

module.exports = function(app) {
    app.get("/burgers", function(request, response) {
        db.burgers.findAll({}).then(function(result) {
            response.json(result);
        });
    });

app.post("/burgers", function(request, response) {
    var input = req.body;
    console.log("input: " + input);

    db.Post.create({
        burger_name: input.enter_text,
        devoured: false,
    }).then(function(result){
        console.log("result: " + result);
        response.json(result);
    });
});

};