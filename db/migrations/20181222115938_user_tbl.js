const knex = require('../../knex')

exports.up = function (_, Promise) {

    return Promise.resolve(knex.schema.createTable('user_tbl', table => {
        table.increments('user_id').unsigned().primary()
        table.string('username', 60)
        table.string('password', 100)
        table.enu('role', ["USER", "ADMIN"])

        table.index('username', 'user_idx')
    }))
};

exports.down = function (knex, Promise) {
    return Promise.resolve(knex.schema.dropTable('user_tbl'))
};
