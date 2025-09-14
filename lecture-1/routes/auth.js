const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')
const { loginBcrypt } = require('../controllers/bcryptAuthController')
const { loginSession } = require('../controllers/sessionAuthController')

// Bcrypt login route (no JWT)
router.post('/login-bcrypt', loginBcrypt)

// JWT login route
router.post('/login-jwt', login)

// Session login route
router.post('/login-session', loginSession)

module.exports = router