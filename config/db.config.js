const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    HOST: process.env.DBHOST,
    USER: process.env.DBUSER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DBNAME,
    DIALECT: process.env.DBDIALECT,
    pool: {
        max: process.env.POOLMAX,
        min: process.env.POOLMIN,
        acquire: process.env.POOLACQUIRE,
        idle: process.env.POOLIDLE
    }
};