const mysql = require("mysql");
const config = require("./db_config.json");

let pool = mysql.createPool(config);

const getConnection = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn);
<<<<<<< HEAD
    } else {
      console.log(err)
=======
>>>>>>> 257240f (ais-decoding-server)
    }
  });
};

module.exports = getConnection;
