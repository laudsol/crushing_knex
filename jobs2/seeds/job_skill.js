
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_skill').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_skill').insert([
        {id: 1, job_id: 1, skill_id: 1},
        {id: 2, job_id: 2, skill_id: 1},
        {id: 3, job_id: 3, skill_id: 3},
        {id: 4, job_id: 4, skill_id: 3},
        {id: 5, job_id: 5, skill_id: 2},
        {id: 6, job_id: 6, skill_id: 2},
      ]);
    });
};
