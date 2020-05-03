var connection = require("./connection.js");

var orm = {
  selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function () {},
  updateOne: function () {},
};

module.exports = orm;
