const knex = require('../../knex')

exports.up = function (_, Promise) {
    return Promise.resolve(knex.schema.createTable('form_tbl', table => {
        table.increments('form_id').primary()

    }))
};

exports.down = function (knex, Promise) {
    return Promise.resolve(knex.schema.dropTable('form_tbl'))
};
