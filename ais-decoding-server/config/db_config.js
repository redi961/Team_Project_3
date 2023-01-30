const mysql = require("mysql");
const config = require("./db_config.json");

let pool = mysql.createPool(config);

const getConnection = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn);
    } else {
      console.log(err)
    }
  });
};

module.exports = getConnection;
