
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job_employer", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("employer_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job_employer");
};
