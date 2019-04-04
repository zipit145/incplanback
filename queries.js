const db = require('./database-connections')

module.exports = {
    readAllUsers(){
        return db('users')
    },
    readAllCompanies(){
        return db('companies')
    },
    readAllDocuments(){
        return db('documents')
    },
    readAllMail(){
        return db('mail')
    },

    createCompany(newCompany){
        return db('companies').insert(newCompany)
    },
    deleteCompany(id){
        return db('companies')
          .where('id', id)
          .delete()
    },
    updateCompany(id, company){
        return db('companies')
            .where('id', id)
            .update(company)
    }
}