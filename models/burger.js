// var orm = require("../config/orm.js")
// var burger = {
//     all: function(cd) {
//         orm.all("burgers", function(res) {
//             cd(res);
//         });
//     },
//     create: function(name, cb) {
//         orm.create("burgers", name, cb);
//     },
//     create: function(id, cb) {
//         orm.create("burgers", id, cb)
//     }
// };
// module.exports = burger;

// Importing orm.js
var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", name, cb);
    },
    update: function(id, cb) {
        orm.update("burgers", id, cb);
    }
};


// Exporting burger.js
module.exports = burger;