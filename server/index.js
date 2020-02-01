require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
app.use(cors())



const pages = ["home", "test-fetch", "contattaci"] //those pages are a mock for what that will be the server in the future

app.get('/pages', (req, res) => res.send({pages}))

app.listen(port, () => console.log(`server started on port ${port}!`))