
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_employer').insert([
        {id: 1, Job_id: 1, Employer_id: 1},
        {id: 2, Job_id: 2, Employer_id: 2},
        {id: 3, Job_id: 3, Employer_id: 3},
      ]);
    });
};
