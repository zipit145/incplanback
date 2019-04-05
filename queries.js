const db = require('./database-connections')

module.exports = {
    readAllUsers(){
        return db('users')
    },

    readAllDocuments(){
        return db('documents')
    },
    readDocument(id){
        return db('documents')
        .where('id', id)
    },
    createDocument(newDocument){
        return db('documents').insert(newDocument)
    },
    deleteDocument(id){
        return db('documents')
          .where('id', id)
          .delete()
    },
    updateDocument(id, document){
        return db('documents')
            .where('id', id)
            .update(document)
    },
    readAllMail(){
        return db('mail')
    },

    readAllCompanies(){
        return db('companies')
    },
    readCompany(id){
        return db('companies')
        .where('id', id)
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
    },
}