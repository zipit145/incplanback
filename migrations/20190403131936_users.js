
exports.up = function(knex, Promise) {

    return createUsersTable()

    function createUsersTable (){
        return knex.schema.createTable('users', (user) => {
            user.bigIncrements('id').unsigned()
            user.string('name')
            user.string('email')
        })
    }
};


exports.down = function(knex, Promise) {
  return Promise.all([


  ]);
};

