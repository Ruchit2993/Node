const { User } = require('../models')
const { comparePassword } = require('../configs/bcrypt-config')
const { success, error } = require('../utils/responseUtil')

async function loginSession(req, res) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return error(res, 'Invalid email or password', 401)
        }
        const isMatch = await comparePassword(password, user.password)
        if (!isMatch) {
            return error(res, 'Invalid email or password', 401)
        }
        // Set session user info
        req.session.user = { id: user.id, email: user.email }
        success(res, { id: user.id, email: user.email }, 'Login successful (session)')
    } catch (err) {
        error(res, 'Server error', 500)
    }
}

module.exports = { loginSession }
