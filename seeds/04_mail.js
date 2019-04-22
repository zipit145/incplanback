
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mail').del()
    .then(function () {
      // Inserts seed entries
      return knex('mail').insert([
        {
          mailImage: null,
          mailEnvelopeEmployeeId: null,
          mailEnvelopeEmployeeTime: new Date().toISOString(),
          mailClientOptionTime: null,
          mailScan: true,
          mailCourier: false,
          mailFirstClass: false,
          mailDestroy: false,
          mailInnerImage: null,
          mailComplete: false,
          mailCompleteEmployeeId: 1,
          mailCompleteEmployeeTime: new Date().toISOString(),
          companyMailId: 1,
        },
      ]);
    });
};
