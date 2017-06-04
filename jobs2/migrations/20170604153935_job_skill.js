
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job_skill", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("skill_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job_skill");
};
