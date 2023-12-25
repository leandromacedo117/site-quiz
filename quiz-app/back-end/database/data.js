const express  = require('express') 
const app = express()

const Sequelize = require('sequelize')
 //  conexão mySql
 const sequelize = new Sequelize('quiz', 'root', 'Goku4622n&&', {
         host: "localhost",
         dialect: 'mysql'
 })

 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
 }