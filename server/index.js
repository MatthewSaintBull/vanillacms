require('dotenv').config()

const _ = require('lodash')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
app.use(cors())


const content = [ //those contents are a mock for what that will be the server in the future
    {
        'id': '1',
        'route': 'home',
        'page': 'home',
        'content': `<h3>home</h3>`
    },
    {
        'id': '2',
        'route': 'chi-sono',
        'page': 'chi sono',
        'content': `<h3>chi sono</h3>`
    },
    {
        'id': '3',
        'route': 'contattaci',
        'page': 'contattaci',
        'content': `<h3>contattaci</h3>`
    }
]


const handleContent = (req) => {
    return _.findLast(content, function(o) {
        return o.id===req.params.contentID
    }) || false // put error message for handling
}

const pages = ["home", "test-fetch", "contattaci"] //those pages are a mock for what that will be the server in the future

app.get('/pages', (req, res) => res.send({pages}))
app.get('/content/:contentID', (req, res) => res.send(handleContent(req)))

app.listen(port, () => console.log(`server started on port ${port}!`))