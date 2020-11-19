import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc        Register user
// @route       GET /api/v1/auth/register
// @access      Public
export const register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body

    // Create user
    const user = await User.create({
        name,
        email,
        password,
    })

    // Create token
    const token = user.getSignedJwtToken()

    res.status(200).json({ success: true, token })
})

export const getSomething = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true })
})
