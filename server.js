var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static(path.join(_dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller");
app.use("/", routes);

var port = process.env.PORT || 8080;
app.listen(port);