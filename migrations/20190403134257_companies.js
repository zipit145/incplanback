exports.up = function(knex, Promise) {

    return createCompaniesTable()

    function createCompaniesTable (){
        return knex.schema.createTable('companies', (company) => {
            company.bigIncrements('companyId').unsigned()
            company.string('companyName')
            company.string('companyAddress')
            company.boolean('scanAll')
            company.boolean('firstClassAll')
            company.integer('scansPerYear')
            company.integer('forwardingPerYear')
            company.float('mailCredits')
            company.bigInteger('userCompanyId').unsigned().index().references('id').inTable('users').onDelete('CASCADE');
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([
    


  ]);
};