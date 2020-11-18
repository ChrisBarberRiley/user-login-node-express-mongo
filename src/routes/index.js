import express from 'express'
import asyncHandler from 'express-async-handler'
import users from './users.js'
import auth from './auth.js'

const router = express.Router()

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        res.json({
            message: 'API',
        })
    })
)

router.use('/users', users)
router.use('/auth', auth)

export default router
