const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('test', { name: 'Dev', age: '22' }) // <-- use 'test', not 'test.ejs'
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))