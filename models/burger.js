var orm = require("../config/orm.js")
var burger = {
    all: function(cd) {
        orm.all("burgers", function(res) {
            cd(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", name, cb);
    },
    create: function(id, cb) {
        orm.create("burgers", id, cb)
    }
};
module.exports = burger;