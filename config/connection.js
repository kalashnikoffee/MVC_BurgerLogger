var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        PORT: 3306,
        user: "root",
        password: "shit",
        database: "burgers_db"
        // host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        // // PORT: 3306,
        // user: "v2hsnx5xkwr9xwxx",
        // password: "st7b2qirs634mnkq",
        // database: "j3rmxe7cj1aoxdfv"
    })
};

connection.connect(function(err) {
    if (err) throw err;
});

// connection.connect();
module.exports = connection;
