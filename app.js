const express = require('express')
const app = express()
const port = 8000
const routeBook = require('./routes/book')
const routeFavorite = require('./routes/favorite')
const cors = require('cors')

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/livros', routeBook)
app.use('/favoritos', routeFavorite)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}...`)
})
