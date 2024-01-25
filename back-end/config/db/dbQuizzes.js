import mysql from "mysql"

export const dbQuizzes = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "Goku4622n&&",
    database: "appQuizDb",
    dialect: 'mysql'
})