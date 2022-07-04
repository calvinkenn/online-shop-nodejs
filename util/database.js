const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'sql-pass-31', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
