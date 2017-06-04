
exports.up = function(knex, Promise) {
  return
  knex.schema.createTable("job", function (table) {
    table.increments();
    table.text("name");
    table.text("description");
    table.integer("min_exprnc");
  });
  knex.schema.createTable("job_employer", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("employer_id");
  });
  knex.schema.createTable("employer", function (table) {
    table.increments();
    table.text("company");
  });
  knex.schema.createTable("job_skill", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("skill_id");
  });
  knex.schema.createTable("skill", function (table) {
    table.increments();
    table.text("skill");
  });
}

exports.down = function(knex, Promise) {
  return
  knex.schema.dropTable("job");
   knex.schema.dropTable("job_employer");
   knex.schema.dropTable("employer");
   knex.schema.dropTable("job_skill");
   knex.schema.dropTable("skill");
}
