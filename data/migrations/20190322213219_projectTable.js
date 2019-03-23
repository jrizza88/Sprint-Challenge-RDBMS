
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();

    tbl.string('project_name', 128).notNullable();
    tbl.text('project_description', 255).notNullable();
    tbl.boolean('project_flag').notNullable().defaultTo(false);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
