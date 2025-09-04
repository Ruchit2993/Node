const express = require('express')
const app = express()
const port = 8085


app.get('/about', (req, res) => {
    return res.send('Hello from About Page '+  '\n hey ' + req.query.name + ' you are ' + req.query.age)})
app.get('/contact', (req, res) => res.send('Hello from contact Page '))
app.get('/main', (req, res) => res.send('Hello from main Page '))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))