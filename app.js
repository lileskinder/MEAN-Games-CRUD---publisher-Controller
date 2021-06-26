const express = require("express");
require("./api/data/db");

const _myRouters = require("./api/routes");

const app = express();

app.set("port", 3000);

app.use(function (request, response, next) {
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/api", _myRouters);

const server = app.listen(app.get("port"), function() {
    console.log("Listening to port ", server.address().port)
})