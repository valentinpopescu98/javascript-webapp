const dbConfig = require("./config/config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.accounts = require("./models/accounts")(sequelize, Sequelize);
db.projects = require("./models/projects")(sequelize, Sequelize);
db.employees = require("./models/employees")(sequelize, Sequelize);

db.employees.belongsTo(db.projects, {
  targetKey: "id",
  foreignKey: "projects_id"
});

module.exports = db;