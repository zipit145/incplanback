exports.up = function(knex, Promise) {

    return createCompaniesTable()

    function createCompaniesTable (){
        return knex.schema.createTable('companies', (company) => {
            company.bigIncrements('companyId').unsigned()
            company.string('name')
            company.string('email')
            company.bigInteger('userCompanyId').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([
    


  ]);
};