
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('documents').del()
    .then(function () {
      // Inserts seed entries
      return knex('documents').insert([
        {
          name: 'Greg1',
          email: 'gregbforney@gmail.com',
          CompanyId: 1,

        },
        {
          name: 'Greg2',
          email: 'gregbforney@gmail2.com',
          CompanyId: 1,
        },
      ]);
    });
};
