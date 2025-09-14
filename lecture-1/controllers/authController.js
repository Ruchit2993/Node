const { comparePassword } = require('../configs/bcrypt-config')
const { User } = require('../models')
const { success, error } = require('../utils/responseUtil')

async function login(req, res) {
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
        success(res, { id: user.id, email: user.email }, 'Login successful')
    } catch (err) {
        error(res, 'Server error', 500)
    }
}

module.exports = { login }
