
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('industry_job').del()
    .then(function () {
      // Inserts seed entries
      return knex('industry_job').insert([
        {id: 1, Job_id: 1, Industry_id: 1},
        {id: 2, Job_id: 2, Industry_id: 2},
        {id: 3, Job_id: 3, Industry_id: 3}
      ]);
    });
};
