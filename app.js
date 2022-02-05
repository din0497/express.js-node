const express = require("express");
const rootDir = require("./util/path");
const path = require("path");

const app = express();
const bodyParser = require('body-parser')

app.set("view engine", "ejs");
app.set("views", "views");

const admin = require("./routes/admin");
const user = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));
app.use(admin);
app.use(user);

app.listen(3000);
