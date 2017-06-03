
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_skills').insert([
        {id: 1, Job_id: 1, Skill_id: 1},
        {id: 2, Job_id: 2, Skill_id: 2},
        {id: 3, Job_id: 3, Skill_id: 3}
      ]);
    });
};
