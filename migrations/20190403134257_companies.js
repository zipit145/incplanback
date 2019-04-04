exports.up = function(knex, Promise) {

    return createCompaniesTable()

    function createCompaniesTable (){
        return knex.schema.createTable('companies', (company) => {
            company.bigIncrements('id').unsigned()
            company.string('name')
            company.string('email')
            company.bigInteger('UserId').unsigned().index().references('id').inTable('users');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([
    


  ]);
};