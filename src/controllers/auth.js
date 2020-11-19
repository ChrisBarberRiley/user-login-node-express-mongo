import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc        Register user
// @route       POST /api/v1/auth/register
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

// @desc        Login user
// @route       POST /api/v1/auth/login
// @access      Public
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    // Validate email and password
    if (!email || !password) {
        res.status(401).json({
            message: 'Please provide a username and password',
        })
    }

    // check for user
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        res.status(401).json({
            message: 'Invalid credentials',
        })
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
        res.status(401).json({
            message: 'Invalid credentials',
        })
    }

    // Create token
    const token = user.getSignedJwtToken()

    res.status(200).json({ success: true, token })
})
