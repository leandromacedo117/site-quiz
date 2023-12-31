import express from "express"
import cors from "cors"
import userRoutes from './routes/users.js'

const app = express()
const port = 9000;

app.use(express.json())
app.use(cors())

app.use('/test', userRoutes)


app.listen(port,() =>{
    console.log('rodando na port')
})



// const Sequelize = require('sequelize')
//  //  conexão mySql
//  const sequelize = new Sequelize('quiz', 'root', 'suaSenhaDoMySQL', {
//          host: "localhost",
//          dialect: 'mysql'
//  })

//  module.exports = {
//     Sequelize: Sequelize,
//     sequelize: sequelize,
//  }
