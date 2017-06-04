exports.up = function(knex, Promise) {
  return knex.schema.createTable("employer", function (table) {
    table.increments();
    table.text("company");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("employer");
};
