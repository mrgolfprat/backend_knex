const { validationResult } = require('express-validator/check')
const { failed } = require('../config/response')

exports.validator = () => (req, res, next) => {
    const errors = validationResult(req)

    if (errors) {
        return failed(res, errors.array()[0])
    }

    next()

}