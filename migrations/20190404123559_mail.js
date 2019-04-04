exports.up = function(knex, Promise) {
    return createMailTable()

    function createMailTable (){
        return knex.schema.createTable('mail', (mail) => {
            mail.bigIncrements('id').unsigned()
            mail.string('name')
            mail.string('email')
            mail.bigInteger('CompanyId').unsigned().index().references('id').inTable('companies');
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