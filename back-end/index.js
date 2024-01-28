import express from "express"
import router from './src/routes/routes.js' 
import cors from 'cors'
import session from "express-session"


const app = express();

app.use(session({secret : 'shauidxbgsaiuxsavbxsiauxvxuiaxvsaxuisavasui'}))
app.use(express.json())

const port = 9000;

app.use(cors())

// routers

app.get('/quizzes', router)

app.get('/users', router)

app.post('/createquiz', router)

app.use('/test', (req,res) =>{
    res.json([
     {
        'id' : 1,
        'quizName' : 'quiz121',
        'numberQuestion' : 3,
        'LastTimeDone': "2024-01-15",
        'DayToNextRetrieval': 4,
        'nRetrieval': 3,
        'quizzes' : [
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         },
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         },
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         }
        ]
     },

     {
        'id' : 2,
        'quizName' : 'quiz122',
        'numberQuestion' : 1,
        'LastTimeDone': "2024-01-04",
        'DayToNextRetrieval': 3,
        'nRetrieval': 2,
        'quizzes' : [
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         }
        ]
     },

     {
        'id' : 3,
        'quizName' : 'quiz123',
        'numberQuestion' : 3,
        'LastTimeDone': "2024-01-15",
        'DayToNextRetrieval': 4,
        'nRetrieval': 3,
        'quizzes' : [
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         },
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         },
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         }
        ]
     },

     {
        'id' : 4,
        'quizName' : 'quiz124',
        'numberQuestion' : 1,
        'LastTimeDone': "2024-01-15",
        'DayToNextRetrieval': 1,
        'nRetrieval': 2,
        'quizzes' : [
         {
            Question: "Pergunta?",
            Answer: "Resposta!"
         }
        ]
     },

    ])
})



app.listen(port,() =>{
    console.log('rodando na port')
})