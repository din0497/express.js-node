const express = require("express");

const path = require("path");

const rootDir = require("../util/path");
const admin = require('./admin')

const router = express.Router();

router.get("/", (req, res, next) => {
  const users = admin.users
  res.render('user', {
    users:users,
    pageTitle: "Users",
    hasUser: users.length > 0
  })
});

module.exports = router