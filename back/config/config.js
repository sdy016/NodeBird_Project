const dotenv = require("dotenv");
//환경변수
dotenv.config();

module.exports = {
  development: {
    username: "core_sa",
    password: process.env.DB_TEST_PASSWORD, //환경변수 값 리턴
    database: "CommunitySNS",
    host: process.env.DB_TEST_HOST,
    dialect: "mssql",
    port: process.env.DB_TEST_PORT,
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: "nodejsbook",
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: "nodejsbook",
    database: "react-nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
