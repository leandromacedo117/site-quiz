import express from "express"

import {getQuizzes} from '../controllers/quiz.controllers.js'
import {getUsers} from '../controllers/users.controllers.js'
import {setCreatequiz} from '../controllers/createQuiz.controllers.js'
import {setQuestionAndAnswer} from '../controllers/questionAndAnswer.controllers.js '
import { getJson } from '../controllers/updateQuestion.controllers.js'
import { setNumberQustion } from '../controllers/numberQuestion.controllers.js'

const router = express.Router()

router.get("/quizzes", getQuizzes)

router.get("/users", getUsers )

router.post("/numberQuestion", setNumberQustion)

router.post('/createquiz', setCreatequiz)

router.post('/question', setQuestionAndAnswer)

router.get('/json', getJson)

export default router
