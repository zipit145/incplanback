const express = require('express') //installed no need for file path
const app = express()
const bodyparser = require('body-parser')
const queries = require('./queries')
const cors = require('cors')

const port = process.env.PORT || 3001
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.get('/',(req, res, next) => {
    queries.readAllUsers().then(users => res.send(users))
})

app.get('/companies',(req, res, next) => {
    queries.readAllCompanies().then(company => res.send(company))
})

app.put('/companies/:id', (req, res, next) => {
    queries.updateCompany(req.params.id, req.body).then(company => res.json(company))
})
app.post('/', (req, res, next) => {
    queries.createCompany(req.body).then(newCompany => res.json(newCompany))
})


app.get('/documents',(req, res, next) => {
    queries.readAllDocuments().then(document => res.send(document))
})

app.get('/mail',(req, res, next) => {
    queries.readAllMail().then(document => res.send(document))
})

app.listen(port)