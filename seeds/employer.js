
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('employer').insert([
        {id: 1, Employer_name: 'Google'},
        {id: 2, Employer_name: 'PWC'},
        {id: 3, Employer_name: 'Skadden'}
      ]);
    });
};
