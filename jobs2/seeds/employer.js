
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('employer').insert([
        {id: 1, company: 'google'},
        {id: 2, company: 'pwc'},
        {id: 3, company: 'ey'},
        {id: 4, company: 'wachtell'},
      ]);
    });
};
