
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mail').del()
    .then(function () {
      // Inserts seed entries
      return knex('mail').insert([
        {
          name: 'mail1',
          email: 'gregbforney@gmail.com',
          CompanyMailId: 1,

        },
        {
          name: 'mail2',
          email: 'gregbforney@gmail2.com',
          CompanyMailId: 1,
        },
      ]);
    });
};
