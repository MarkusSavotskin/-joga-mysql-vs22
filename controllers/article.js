const Article = require('../models/article.model')

// show all articles index page
const getAllArticles = (req, res) => {
    Article.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || 'An error occurred retrieving articles data'
            })
        } else {
            console.log(data)
            res.render('index', {
                articles: data
            })
        }
    })
};
//show article by this slug
const getArticleSlug = (req, res) => {
    Article.getBySlug(req.params.slug, (err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || 'An error occurred retrieving article data'
            })
        } else {
            console.log(data)
            res.render('article', {
                article: data
            })
        }
    })
}

module.exports = {
    getAllArticles,
    getArticleSlug
}