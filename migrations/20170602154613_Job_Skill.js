
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job_skills", function (table) {
    table.increments();
    table.integer("Job_id");
    table.integer("Skill_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job_skills");
};
