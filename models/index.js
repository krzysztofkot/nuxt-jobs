"use strict";
import Sequelize, { DataTypes } from "sequelize";
import config from "../config/config.js";

//import all models
import User from "./user.js";

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db["Users"] = User(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
