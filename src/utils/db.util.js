const Database = require('../services/database.service');

module.exports = async function query(sql, values) {
  return new Promise((resolve, reject) => {
    let _sql = '';
    if (values) {
      _sql = Database.format(sql, values);
    } else {
      _sql = sql;
    }

    console.log(_sql);

    Database.getInstance()
      .getConnection()
      .query(_sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
  });
};
