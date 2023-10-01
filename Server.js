//A simple backend server made with expressJs
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", (req, res, next) => {
  res.send("<h1>Homepage</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>error</h1>");
});

app.listen(3000);


