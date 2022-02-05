const express = require("express");

const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const users = [];

router.get("/admin", (req, res, next) => {
  res.render("admin", {
    pageTitle:'Admin'
  });
});

router.post("/admin", (req, res, next) => {
  users.push({userName: req.body.userName});
  res.redirect('/')
  console.log(users);

});

exports.routes = router;
exports.users = users;
