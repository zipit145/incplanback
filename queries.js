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
        .where('mailId', id)
    },
    createMail(newMail){
        return db('mail').insert(newMail)
    },
    deleteMail(id){
        return db('mail')
          .where('mailId', id)
          .delete()
    },
    updateMail(id, mail){
        return db('mail')
            .where('mailId', id)
            .update(mail)
    },

    readAllDocuments(){
        return db('documents')
    },
    readDocument(id){
        return db('documents')
        .where('documentId', id)
    },
    createDocument(newDocument){
        return db('documents').insert(newDocument)
    },
    deleteDocument(id){
        return db('documents')
          .where('documentId', id)
          .delete()
    },
    updateDocument(id, document){
        return db('documents')
            .where('documentId', id)
            .update(document)
    },

    readAllCompanies(){
        return db('companies')
    },
    readCompany(id){
        return db('companies')
        .where('companyId', id)
    },
    createCompany(newCompany){
        return db('companies').insert(newCompany)
    },
    deleteCompany(id){
        return db('companies')
          .where('companyId', id)
          .delete()
    },
    updateCompany(id, company){
        return db('companies')
            .where('companyId', id)
            .update(company)
    },

    // readCompany(id){
    //     return db('mail')
    //         .where('CompanyMailId', id)
    //         return db('mail')
    //         .where('CompanyMailId', id)
    //     // return db('companies')

    //     //     .innerJoin('mail', 'companies.companyId', 'mail.CompanyMailId')
    // },
}