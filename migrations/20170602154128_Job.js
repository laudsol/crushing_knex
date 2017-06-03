
exports.up = function(knex, Promise) {
  return knex.schema.createTable("job", function (table) {
    table.increments();
    table.text("Position");
    table.text("Description");
    table.integer("Req_yrs_exprnc");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("job");
};
