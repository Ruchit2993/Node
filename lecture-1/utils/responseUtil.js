function success(res, data, message = 'Success') {
    res.json({ success: true, message, data })
}

function error(res, message = 'Error', status = 500) {
    res.status(status).json({ success: false, message })
}

module.exports = { success, error }
