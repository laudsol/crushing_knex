
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job_employer", function (table) {
    table.increments();
    table.integer("Job_id");
    table.integer("Employer_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job_employer");
};
