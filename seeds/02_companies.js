exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: 'Gregcomp1',
          email: 'gregbforney@gmail.com',
          UserCompanyId: 1,

        },
        {
          name: 'Gregcomp2',
          email: 'gregbforney@gmail2.com',
          UserCompanyId: 1,
        },
      ]);
    });
};
