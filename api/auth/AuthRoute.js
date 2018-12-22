const router = require('express').Router()
const AuthController = require('./AuthController')


router.post('/register', AuthController.register)

module.exports = router