const { getAllFavorites, insertFavorite, removeFavorite } = require('../services/favorite')

function getFavorites(req, res) {
    try {
        const books = getAllFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite(req, res) {
    try {
        const id = req.params.id
        insertFavorite(id)
        res.status(201)
        res.send('Livro inserido nos favoritos com sucesso')
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            removeFavorite(id)
            res.send('Livro removido dos favoritos com sucesso.')
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
    getFavorites,
    postFavorite,
    deleteFavorite
}