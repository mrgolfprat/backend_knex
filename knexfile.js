// Update with your config settings.
const { DATABASE: DB } = require('config')

const DATABASE = DB[process.env.NODE_ENV]

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: DATABASE.host,
      user: DATABASE.user,
      password: DATABASE.password,
      database: DATABASE.database
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: DATABASE.host,
      user: DATABASE.user,
      password: DATABASE.password,
      database: DATABASE.database
    },
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
  }

};
