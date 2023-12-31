import mysql from "mysql"

export const data = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "Goku4622n&&",
    database: "quiz",
    dialect: 'mysql'
})