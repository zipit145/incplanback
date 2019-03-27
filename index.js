const express = require('express') //installed no need for file path
const app = express()
const queries = require('./queries')

const port = process.env.PORT || 3001
app.get('/',(req, res, next) => {
    console.log("hi")
    queries.readAllUsers().then(users => res.send(users))
    //return <div>hellooo there</div>
})

app.listen(port)