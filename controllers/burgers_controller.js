var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

// Creates burgers
router.post("/api/burger", function (req, res) {
  const burger_name = req.body.burger_name;
  orm.insertOne(burger_name, function (data) {
    if (data.affectedRows === 1) {
      res.json({
        msg: "Burger successfully created",
      });
    }
  });
});

// Reads Burgers
router.get("*", function (req, res) {
  orm.selectAll(function (data) {
    res.render("index", { burgers: data });
  });
});

// Updates burgers
router.put("/api/burger/:id", function (req, res) {
  const id = req.params.id;
  orm.updateOne(id, function (data) {
    if (data.affectedRows === 1) {
      res.json({
        msg: "Burger successfully updated",
      });
    }
  });
});

module.exports = router;
