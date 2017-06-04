
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job", function (table) {
      table.increments();
      table.text("name");
      table.text("description");
      table.integer("min_exprnc");
    });
  return knex.schema.createTable("job_employer", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("employer_id");
  });
  return knex.schema.createTable("employer", function (table) {
    table.increments();
    table.text("company");
  });
  return knex.schema.createTable("job_skill", function (table) {
    table.increments();
    table.integer("job_id");
    table.integer("skill_id");
  });
  return knex.schema.createTable("skill", function (table) {
    table.increments();
    table.text("skill");
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job");
  return knex.schema.dropTable("job_employer");
  return knex.schema.dropTable("employer");
  return knex.schema.dropTable("job_skill");
  return knex.schema.dropTable("skill");
}
}
