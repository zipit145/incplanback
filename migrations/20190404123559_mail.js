exports.up = function(knex, Promise) {
    return createMailTable()

    function createMailTable (){
        return knex.schema.createTable('mail', (mail) => {
            mail.bigIncrements('mailId').unsigned()
            mail.string('mailImage')
            mail.bigInteger('mailEnvelopeEmployeeId')
            mail.datetime('mailEnvelopeEmployeeTime')
            mail.datetime('mailClientOptionTime')
            mail.boolean('mailScan');
            mail.boolean('mailCourier');
            mail.boolean('mailFirstClass');
            mail.boolean('mailDestroy');
            mail.string('mailInnerImage')
            mail.boolean('mailComplete');
            mail.bigInteger('mailCompleteEmployeeId')
            mail.datetime('mailCompleteEmployeeTime')
            mail.bigInteger('companyMailId').unsigned().index().references('companyId').inTable('companies').onDelete('CASCADE');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('mail'),
    knex.schema.dropTable('documents'),
    knex.schema.dropTable('companies'),
    knex.schema.dropTable('users'),
  ]);
};