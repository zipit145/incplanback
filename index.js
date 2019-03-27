const express = require('express') //installed no need for file path
const app = express()

const port = 3001
app.get('/',(req, res, next) => {
    console.log("hi")
    res.send({msg: "try again"})
    //return <div>hellooo there</div>
})

app.listen(port)