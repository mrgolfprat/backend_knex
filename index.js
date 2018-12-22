const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const COOKIE = require('config').get('COOKIE')
const { debug } = require('./config/debugging')
require('dotenv').config()
require('./knex')

const app = express()
const port = process.env.PORT || 3100
const version = '/api/v1'

// helmet
app.use(helmet())

// cors
const whitelist = [
    "http://localhost:3000",
    undefined
]

const corsOption = {
    origin: (origin, cb) => {
        debug('origin %o', origin)
        if (whitelist.indexOf(origin) !== -1) {
            cb(null, true)
        } else {
            cb(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200,
    preflightContinue: true,
    credentials: true
}

app.use(cors(corsOption))

// body parser
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

// cookies
app.set('trust proxy', 1)
app.use(cookieSession({
    name: 'cf_1',
    keys: [COOKIE.COOKIE_KEY],
    maxAge: COOKIE.COOKIE_EXPIRE * 1000,
    secure: process.env.NODE_ENV == 'production' ? false : false,
    httpOnly: true,
}))

// static
app.use(version + '/static', express.static(path.join(__dirname, 'public')))


// route
const auth = require('./api/auth/AuthRoute')

app.use(version + '/auth', auth)

app.listen(port, () => debug("listening at port %o", port))
