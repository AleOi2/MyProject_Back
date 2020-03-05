// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:shineweare@localhost:5432/usuarios',
    migrations: {
      directory: './knex/migrations',
    },
    seeds: { directory: './knex/seeds' },
  },

};
