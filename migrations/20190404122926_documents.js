exports.up = function(knex, Promise) {

    return createDocumentsTable()

    function createDocumentsTable (){
        return knex.schema.createTable('documents', (document) => {
            document.bigIncrements('documentId').unsigned()
            document.string('documentType')
            document.string('documentLocation')
            document.bigInteger('documentCompanyId').unsigned().index().references('companyId').inTable('companies').onDelete('CASCADE');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([


  ]);
};