import { Sequelize } from "sequelize";

const db = new Sequelize("express-react", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
