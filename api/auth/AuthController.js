const { success, failed } = require('../../config/response')
const { err, debug } = require('../../config/debugging')
const AuthModel = require('./AuthModel')

class AuthController {

    async register(req, res) {
        try {

            success(res, 'register success')
        } catch (error) {
            err(error.message, req.originalUrl)
            failed(res, '')
        }
    }

}

module.exports = new AuthController()