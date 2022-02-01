const express = require("express");

const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/admin", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "admin.html"));
});

module.exports = router;
