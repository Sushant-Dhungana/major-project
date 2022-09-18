const express = require('express')
const router = express.Router()


const { registerUser, loginUser, getMe } = require('../controller/userController.js')
const {protect} = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe )

module.exports = router