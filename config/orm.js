var connection = require("./connection");

var orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    create: function(tableInput, val, cb){
        connection.query("INSERT INTRO " + tableInput + " (burger_name) VALUES ('" + val + "');",
        function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};