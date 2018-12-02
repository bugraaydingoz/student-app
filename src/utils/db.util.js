const Database = require('../services/database.service');

module.exports = async function query(sql) {
  return new Promise((resolve, reject) => {
    Database.getInstance()
      .getConnection()
      .query(sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
  });
};
