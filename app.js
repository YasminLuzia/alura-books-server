const express = require('express')
const app = express()
const port = 8000
const routeBook = require('./routes/book')

app.use('/livros', routeBook)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}...`)
})
