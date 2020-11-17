import express from 'express'

import { getUsers, getUser, createUser } from '../controllers/users.js'

const router = express.Router()

// Standard routing
router.get('/all-users', (req, res) => {
    res.json({
        message: 'Users route!',
    })
})

// Controller routes
router.route('/').get(getUsers)
router.route('/user/:id').get(getUser).post(createUser)

export default router
