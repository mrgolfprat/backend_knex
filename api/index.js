const auth = require('./auth/AuthRoute')

exports.createApi = (app, version) => {
    app.use(version + '/auth', auth)

}