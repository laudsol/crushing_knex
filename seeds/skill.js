
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skill').del()
    .then(function () {
      // Inserts seed entries
      return knex('skill').insert([
        {id: 1, Skill_name: 'programming'},
        {id: 2, Skill_name: 'accounting'},
        {id: 3, Skill_name: 'litigation'}
      ]);
    });
};
