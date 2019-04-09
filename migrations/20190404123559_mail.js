exports.up = function(knex, Promise) {
    return createMailTable()

    function createMailTable (){
        return knex.schema.createTable('mail', (mail) => {
            mail.bigIncrements('mailId').unsigned()
            mail.string('name')
            mail.string('email')
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