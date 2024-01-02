import express from "express"
import cors from "cors"
import userRoutes from './routes/users.js'
import session from "express-session"
import fileUpload from "express-fileupload"
import { fstat } from "fs"


// import pash from "pash"

const app = express()
const port = 9000;

app.use(session({secret : 'shauidxbgsaiuxsavbxsiauxvxuiaxvsaxuisavasui'}))
app.use(express.json())
// app.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: pash.join(__dirname, 'temp')
// }))

app.use(cors())

// app.use('/test', userRoutes) // dataBase

// tests 
app.use('/test', (req,res) =>{
    res.json([
     {
        'id' : 1,
        'quizName' : 'quiz121',
        'numberQuestion' : 31
     },

     {
        'id' : 2,
        'quizName' : 'quiz122',
        'numberQuestion' : 0
     },

     {
        'id' : 3,
        'quizName' : 'quiz123',
        'numberQuestion' : 99
     },

     {
        'id' : 4,
        'quizName' : 'quiz124',
        'numberQuestion' : 1
     },

    ])
})


app.listen(port,() =>{
    console.log('rodando na port')
})




