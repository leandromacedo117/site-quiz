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
app.post("/numberQuestion", router)

app.post('/json', router)

app.post('/createquiz', router)

app.post('/question', router)



app.use('/test', (req,res) =>{
    res.json([
     {
        'id' : 1,
        'quizName' : 'quiz121',
        'numberQuestion' : 3,
        'quizes' : [
         {
            Question: "Pergunta1?",
            Answer: "Resposta1!",
            'LastTimeDone': "2024-05-27",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta2?",
            Answer: "Resposta2!",
            'LastTimeDone': "2024-01-15",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta3?",
            Answer: "Resposta3!",
            'LastTimeDone': "2024-02-06",
            'DayToNextRetrieval': 1,
            'nRetrieval': 3
         }
        ]
     },

     {
        'id' : 2,
        'quizName' : 'quiz122',
        'numberQuestion' : 1,
        'quizes' : [
         {
            Question: "Pergunta1?",
            Answer: "Resposta1!",
            'LastTimeDone': "2024-07-28",
            'DayToNextRetrieval': 1,
            'nRetrieval': 3
         }
        ]
     },

     {
        'id' : 3,
        'quizName' : 'quiz123',
        'numberQuestion' : 3,
        'quizes' : [
         {
            Question: "Pergunta1?",
            Answer: "Resposta1!",
            'LastTimeDone': "2024-07-20",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta2?",
            Answer: "Resposta2!",
            'LastTimeDone': "2024-06-15",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         },
         {
            Question: "Pergunta3?",
            Answer: "Resposta3!",
            'LastTimeDone': "2024-01-15",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         }
        ]
     },

     {
        'id' : 4,
        'quizName' : 'quiz124',
        'numberQuestion' : 1,
        'quizes' : [
         {
            Question: "Pergunta1?",
            Answer: "Resposta1!",
            'LastTimeDone': "2024-01-15",
            'DayToNextRetrieval': 4,
            'nRetrieval': 3
         }
        ]
     },

    ])
})



app.listen(port,() =>{
    console.log('rodando na port')
})