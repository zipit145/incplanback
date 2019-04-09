
exports.up = function(knex, Promise) {

    return createUsersTable()

    function createUsersTable (){
        return knex.schema.createTable('users', (user) => {
            user.bigIncrements('id').unsigned()
            user.string('firstName')
            user.string('lastName')
            user.string('email')
            user.string('password')
            user.boolean('admin')
            user.boolean('employee')
            user.boolean('manager')
            user.string('phoneNumber')
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([


  ]);
};

