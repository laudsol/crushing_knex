
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skill').del()
    .then(function () {
      // Inserts seed entries
      return knex('skill').insert([
        {id: 1, skill: 'coding'},
        {id: 2, skill: 'accounting'},
        {id: 3, skill: 'law'}
      ]);
    });
};
