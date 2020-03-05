
exports.up = function(knex) {
    return knex.schema.createTable('user', (table)=>{
        table.increments();
        table.text('title').notNullable();
        table.integer('priority').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
