
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('industry').del()
    .then(function () {
      // Inserts seed entries
      return knex('industry').insert([
        {id: 1, Industry_name: 'Tech'},
        {id: 2, Industry_name: 'Finance'},
        {id: 3, Industry_name: 'Law'}
      ]);
    });
};
