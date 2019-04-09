exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Greg',
          lastName: 'Forney',
          email: 'gregbforney@gmail.com',
          password: 'password',
          admin: true,
          employee: true,
          manager: true,
          phoneNumber: '5555555555'
        },
      ]);
    });
};
