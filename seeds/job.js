
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job').del()
    .then(function () {
      // Inserts seed entries
      return knex('job').insert([
        {id: 1, Position: "Software dev", Description: "Code a lot" ,Req_yrs_exprnc: 2},
        {id: 2, Position: "Auditer", Description: "Punch numbers" ,Req_yrs_exprnc: 5},
        {id: 3, Position: "Lawyer", Description: "Carry legal binder" ,Req_yrs_exprnc: 6}
      ]);
    });
};
