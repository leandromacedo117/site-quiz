import express from "express"
import {getQuizzes} from '../controllers/quiz.controllers.js'
import {getUsers} from '../controllers/users.controllers.js'

const router = express.Router()

router.get("/quizzes", getQuizzes)

 router.get("/users", getUsers )

export default router
