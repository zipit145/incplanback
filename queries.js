const db = require('./database-connections')

module.exports = {
    readAllUsers(){
        return db('users')
    },
    readAllCompanies(){
        return db('companies')
    },
}