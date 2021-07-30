var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/backlog", function (req, res, next) {
  res.render("pages/backlog");
});
router.get("/my/board", function (req, res, next) {
  res.render("pages/board");
});
router.get("/getting-started", function (req, res, next) {
  res.render("getting-started");
});
router.get("/", function (req, res, next) {
  res.render("home", { userLogged: false });
});
module.exports = router;
