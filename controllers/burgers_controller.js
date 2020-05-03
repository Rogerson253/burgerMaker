var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

router.get("/", function(req, res) {
    orm.selectAll(function(data) {
      res.json(data);
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

  module.exports = router;