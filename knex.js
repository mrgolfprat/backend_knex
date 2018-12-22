var config = require('./knexfile.js');
var env = process.env.NODE_ENV; // actually_use development
var knex = require('knex')(config[env]);

// knex.migrate.latest([config])

// knex.seed.run();

module.exports = knex;
