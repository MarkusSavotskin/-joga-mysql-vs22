const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')

router.get('/', articleController.getAllArticles)
router.get('/:slug', articleController.getArticleSlug)
router.get('/article/create', articleController.showNewArticleForm)
router.post('/create', articleController.createNewArticle)
router.all('/article/edit/:id', articleController.updateArticle)

module.exports = router