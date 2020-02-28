const orm = require("../config/orm.js");

const burger = {
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
