const dotenv = require('dotenv');
const mysql = require('mysql');
class Database {
  constructor() {
    dotenv.config();

    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEME,
      charset: 'utf8',
      timezone: 'UTC',
      connectionLimit: 10,
    });

    Database._instance = this;
  }

  static getInstance() {
    if (!Database._instance) Database._instance = new Database();
    return Database._instance;
  }

  getConnection() {
    return this.pool;
  }
}

module.exports = Database;
