import mysql from "mysql"

export const dbCreateQuiz = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "Goku4622n&&",
    database: "appQuizDb",
    dialect: 'mysql'
})