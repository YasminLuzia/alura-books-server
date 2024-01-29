const { Router } = require('express')
const router = Router()
const { getFavorites, postFavorite, deleteFavorite } = require('../controllers/favorite')

router.get('/', getFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router