exports.up = function(knex, Promise) {

    return createDocumentsTable()

    function createDocumentsTable (){
        return knex.schema.createTable('documents', (document) => {
            document.bigIncrements('id').unsigned()
            document.string('name')
            document.string('email')
            document.bigInteger('CompanyId').unsigned().index().references('companyId').inTable('companies').onDelete('CASCADE');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([


  ]);
};