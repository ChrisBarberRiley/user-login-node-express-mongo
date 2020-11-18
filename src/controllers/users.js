import asyncHandler from 'express-async-handler'

// @desc        Get all users
// @route       GET /api/v1/users
// @access      Public
export const getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Some users' })
})

// @desc        Get single users
// @route       GET /api/v1/users/user/1
// @access      Public
export const getUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `Get user with id of ${req.params.id}`,
    })
})

// @desc        Create new user (testing route purpose/ define new routes)
// @route       POST /api/v1/users/user/:id
// @access      Public
export const createUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: `Create new user with id ${req.params.id}. Note this is a test route and you wouldn't specify the ID usually, define new routes in the route files`,
    })
})
