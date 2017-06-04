
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job').del()
    .then(function () {
      // Inserts seed entries
      return knex('job').insert([
        {id: 1, name: 'dev',description:'code stuff' , min_exprnc:1},
        {id: 2, name: 'dev',description:'code things' , min_exprnc:4},
        {id: 3, name: 'lawyer',description:'legal stuff' , min_exprnc:3},
        {id: 4, name: 'lawer',description:'legal things' , min_exprnc:4},
        {id: 5, name: 'accountant',description:'count stuff' , min_exprnc:1},
        {id: 6, name: 'accountant',description:'count things' , min_exprnc:2}
      ]);
    });
};
