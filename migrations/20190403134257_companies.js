exports.up = function(knex, Promise) {

    return createCompaniesTable()

    // function createUsersTable (){
    //     return knex.schema.createTable('users', (user) => {
    //         user.bigIncrements('id').unsigned()
    //         user.string('name')
    //         user.string('email')
    //     })
    // }
    function createCompaniesTable (){
        return knex.schema.createTable('companies', (company) => {
            company.bigIncrements('id').unsigned()
            company.string('name')
            company.string('email')
            company.bigInteger('UserId').unsigned().index().references('id').inTable('users');
        })
    }
};

// exports.up = function(knex, Promise) {

//     return createUsersTable()
//         .then(createCompaniesTable)

//     function createUsersTable (){
//         return knex.schema.createTable('users', (user) => {
//             user.bigIncrements('id').unsigned()
//             user.string('name')
//             user.string('email')
//         })
//     }
//     function createCompaniesTable (){
//         return knex.schema.createTable('companies', (company) => {
//             company.bigIncrements('id').unsigned()
//             company.string('name')
//             company.string('email')
//             company.bigInteger('UserId').unsigned().index().references('id').inTable('users');
//         })
//     }
// };

exports.down = function(knex, Promise) {
  return Promise.all([
    

    knex.schema.dropTable('companies'),
    knex.schema.dropTable('users'),

  ]);
};