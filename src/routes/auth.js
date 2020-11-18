import express from 'express'
import { register, getSomething } from '../controllers/auth.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

router.route('/register').post(register).get(getSomething)

export default router
