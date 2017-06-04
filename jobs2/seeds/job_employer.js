
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_employer').insert([
        {id: 1, job_id: 1, employer_id: 1},
        {id: 2, job_id: 2, employer_id: 1},
        {id: 3, job_id: 3, employer_id: 4},
        {id: 4, job_id: 4, employer_id: 4},
        {id: 5, job_id: 5, employer_id: 2},
        {id: 6, job_id: 6, employer_id: 3},
      ]);
    });
};
