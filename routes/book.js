const { Router } = require('express')
const router = Router()

const { getBooks, getBook } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST.')
})

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH.')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE.')
})

module.exports = router