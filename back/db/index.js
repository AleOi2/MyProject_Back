const knex = require('knex')({
    client:'pg',
    connection: 'postgres://postgres:1Oorion2!@localhost:5432/usuarios'
})

module.exports = knex;