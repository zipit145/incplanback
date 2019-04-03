exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: 'Greg1',
          email: 'gregbforney@gmail.com',
          UserId: 1,

        },
        {
          name: 'Greg2',
          email: 'gregbforney@gmail2.com',
          UserId: 1,
        },
      ]);
    });
};
