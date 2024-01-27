const { getAllBooks, getBookById, insertBook, editBook, removeBook } = require('../services/book')

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send('ID inválido.')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        insertBook(newBook)
        res.status(201)
        res.send('Livro inserido com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            editBook(body, id)
            res.send('Item modificado com sucesso.')
        } else {
            res.status(422)
            res.send('ID inválido.')
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            removeBook(id)
            res.send('Livro removido com sucesso.')
        } else {
            res.status(422)
            res.send('ID inválido.')
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}