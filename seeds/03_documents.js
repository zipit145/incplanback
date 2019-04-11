
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('documents').del()
    .then(function () {
      // Inserts seed entries
      return knex('documents').insert([
        {
          documentType: '1099',
          documentLocation: 'https://incplan.herokuapp.com/documents/1/1099.pdf',
          documentCompanyId: 1,
        },
        {
          documentType: 'w-2',
          documentLocation: 'https://incplan.herokuapp.com/documents/2/w-2.pdf',
          documentCompanyId: 1,
        },
      ]);
    });
};
