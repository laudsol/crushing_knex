'use strict';

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

knex('employer')
  .join('job_employer','employer.id','=','job_employer.employer_id')
  .join('job','job_employer.job_id','=','job.id')
  .join('job_skill','job_skill.job_id','=','job.id')
  .join('skill','job_skill.skill_id','=','skill.id')
  .select('skill.skill','employer.company')
  .where('skill','=','accounting')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
