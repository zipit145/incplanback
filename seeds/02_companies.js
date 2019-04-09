exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          companyName: 'Gregcomp1',
          companyAddress: '1234 testing lane',
          scanAll: true,
          firstClassAll: false,
          scansPerYear: 500,
          forwardingPerYear: 10,
          mailCredits: 400.00,
          userCompanyId: 1,
        },
        {
          companyName: 'Gregcomp2',
          companyAddress: '1234 testing lane',
          scanAll: true,
          firstClassAll: false,
          scansPerYear: 500,
          forwardingPerYear: 10,
          mailCredits: 400.00,
          userCompanyId: 1,
        },
      ]);
    });
};
