
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job').del()
    .then(function () {
      // Inserts seed entries
      return knex('job').insert([
        {id: 1, name: 'fun dev',description:'code stuff' , min_exprnc:1},
        {id: 2, name: 'boring dev',description:'code things' , min_exprnc:4},
        {id: 3, name: 'fun lawyer',description:'legal stuff' , min_exprnc:3},
        {id: 4, name: 'boring laywer',description:'legal things' , min_exprnc:4},
        {id: 5, name: 'fun accountant',description:'count stuff' , min_exprnc:1},
        {id: 6, name: 'boring accountant',description:'count things' , min_exprnc:2}
      ]);
    });
};
