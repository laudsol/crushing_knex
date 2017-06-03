exports.up = function(knex, Promise) {
  return knex.schema.createTable("skill", function (table) {
    table.increments();
    table.text("Skill_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("skill");
};
