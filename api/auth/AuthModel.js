const knex = require('../../knex')

class AuthModel {

    insertUser(userData) {
        return knex('user_tbl').insert(userData)
    }

    getUsername(username) {
        return knex('user_tbl').first('password', 'user_id', 'role').where({ username })
    }

}


module.export = new AuthModel()