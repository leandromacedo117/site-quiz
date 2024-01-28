import express from "express"

import {getQuizzes} from '../controllers/quiz.controllers.js'
import {getUsers} from '../controllers/users.controllers.js'
import {setCreatequiz} from '../controllers/createQuiz.controllers.js'

const router = express.Router()

router.get("/quizzes", getQuizzes)

router.get("/users", getUsers )

router.post('/createquiz', setCreatequiz)



export default router
