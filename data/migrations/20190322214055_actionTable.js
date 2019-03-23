
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();

    tbl.text('action_description').notNullable().unique();
    tbl.text('action_notes')
    tbl.boolean('actions_completed').notNullable().defaultTo(false);
    tbl
    .integer('project_id')
    .unsigned()
    .references('id')
    .inTable('projects')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
