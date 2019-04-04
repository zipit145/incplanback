exports.up = function(knex, Promise) {

    return createDocumentsTable()

    function createDocumentsTable (){
        return knex.schema.createTable('documents', (document) => {
            document.bigIncrements('id').unsigned()
            document.string('name')
            document.string('email')
            document.bigInteger('CompanyId').unsigned().index().references('id').inTable('companies');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([


  ]);
};