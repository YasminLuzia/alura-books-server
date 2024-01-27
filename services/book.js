const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const newBookList = [...books, newBook]
    fs.writeFileSync('books.json', JSON.stringify(newBookList))
}

function editBook(edit, id) {
    let currentBooks = JSON.parse(fs.readFileSync('books.json'))
    const editedIndex = currentBooks.findIndex(book => book.id === id)
    const editedContent = { ...currentBooks[editedIndex], ...edit }
    currentBooks[editedIndex] = editedContent
    fs.writeFileSync('books.json', JSON.stringify(currentBooks))
}

function removeBook(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const filteredBooks = books.filter(book => book.id !== id)
    fs.writeFileSync('books.json', JSON.stringify(filteredBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    editBook,
    removeBook
}