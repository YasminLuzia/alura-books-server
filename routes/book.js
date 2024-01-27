const { Router } = require('express')
const router = Router()
const { getBooks, getBook, postBook, patchBook, deleteBook } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/:id', patchBook)

router.delete('/:id', deleteBook)

module.exports = router