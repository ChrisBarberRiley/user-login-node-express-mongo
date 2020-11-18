import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc        Register user
// @route       GET /api/v1/auth/register
// @access      Public
export const register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body

    const user = await User.create({
        name,
        email,
        password,
    })

    res.status(200).json({ name, email, password })
})

export const getSomething = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true })
})
