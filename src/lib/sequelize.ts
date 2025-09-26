import { Sequelize } from "sequelize";

const sqlite3 = require("sqlite3")
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
  dialectModule: sqlite3,
  logging: false,
});
