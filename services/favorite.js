const fs = require('fs')

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json'))
}

function removeFavorite(id) {
    const favorites = JSON.parse(fs.readFileSync('favorites.json'))
    const filteredFavorites = favorites.filter(favorite => favorite.id !== id)
    fs.writeFileSync('favorites.json', JSON.stringify(filteredFavorites))
}

function insertFavorite(id) {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const favorites = JSON.parse(fs.readFileSync('favorites.json'))
    const newFavorite = books.find(book => book.id === id)
    const newFavoriteList = [...favorites, newFavorite]
    fs.writeFileSync('favorites.json', JSON.stringify(newFavoriteList))
}

module.exports = {
    getAllFavorites,
    removeFavorite,
    insertFavorite
}