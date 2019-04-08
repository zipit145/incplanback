const db = require('./database-connections')

module.exports = {
    readAllUsers(){
        return db('users')
    },
    readUser(id){
        return db('users')
        .where('id', id)
    },
    createUser(newUser){
        return db('users').insert(newUser)
    },
    deleteUser(id){
        return db('users')
          .where('id', id)
          .delete()
    },
    updateUser(id, user){
        return db('users')
            .where('id', id)
            .update(user)
    },

    readAllMail(){
        return db('mail')
    },
    readMail(id){
        return db('mail')
        .where('id', id)
    },
    createMail(newMail){
        return db('mail').insert(newMail)
    },
    deleteMail(id){
        return db('mail')
          .where('id', id)
          .delete()
    },
    updateMail(id, mail){
        return db('mail')
            .where('id', id)
            .update(mail)
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