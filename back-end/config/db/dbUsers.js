import mysql from "mysql"

export const dbUsers = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "Goku4622n&&",
    database: "userLogin",
    dialect: 'mysql'
})