
exports.up = function(knex, Promise) {
  return knex.schema.createTable("industry_job", function (table) {
    table.increments();
    table.integer("Job_id");
    table.integer("Industry_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("industry_job");
};
