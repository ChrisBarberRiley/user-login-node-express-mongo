import express from 'express'
import { register, login } from '../controllers/auth.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)

export default router
