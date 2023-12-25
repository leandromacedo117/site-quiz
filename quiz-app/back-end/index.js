const express  = require('express') 
const app = express()

const session = require('express-session')
const fileupload = require('express-fileupload')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')

var pash = require('path')

const port = 9000;

app.use(session({secret : 'shauidxbgsiauxvxuiaxvsaxuisavasui'}))
app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: pash.join(__dirname, 'temp')
}))
app.use(cors())

app.get('/quiz', (req,res) => {
    res.json([{'test' : 'Okay'}])
})






app.listen(port,() =>{
    console.log('rodando na port')
})



// const Sequelize = require('sequelize')
//  //  conexão mySql
//  const sequelize = new Sequelize('quiz', 'root', 'Goku4622n&&', {
//          host: "localhost",
//          dialect: 'mysql'
//  })

//  module.exports = {
//     Sequelize: Sequelize,
//     sequelize: sequelize,
//  }