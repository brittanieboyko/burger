const connection = require("../config/connection.js");

const objToSql = (ob) => {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: (tableInput, cb) => {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: (table, cols, vals, cb) => {
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?) `;
    connection.query(queryString, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  update: (table, objColVals, condition, cb) => {
    let value = objToSql(objColVals);
    let queryString = `UPDATE ${table} SET ${value} WHERE ${condition};`
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
