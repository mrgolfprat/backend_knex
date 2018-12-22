const _debug = require('debug')('debuging:debug')
const _error = require('debug')('debuging:error')
const moment = require('moment-timezone')
const winston = require('winston')

const path = require('path')

exports.debug = _debug
exports.err = (msg, url) => {
    if (process.env.NODE_ENV == 'production') {
        const logger = winston.createLogger({
            level: 'error',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ filename: path.join(__dirname, '..', 'logs', `${moment().tz('Asia/Bangkok').format('YYYY-MM-DD')}-error.log`), level: 'error' })
            ]
        })

        return logger.error(`${moment().tz('Asia/Bangkok').format('HH:mm:ss')}${url ? url : ''} => ${msg}`)

    } else {
        return _error('error with message: %o', msg)
    }
}
