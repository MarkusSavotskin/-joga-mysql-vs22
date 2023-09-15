const Article = require('../models/article.model')

// show all articles index page
const getAllArticles = (req, res) => {
    Article.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'An error occurred retrieving articles data'
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
                message: err.message || 'An error occurred retrieving article data'
            })
        } else {
            console.log(data)
            res.render('article', {
                article: data
            })
        }
    })
}

const createNewArticle = (req, res) => {
    console.log('new article')
    const newArticle = new Article({
        name: req.body.name,
        slug: req.body.slug,
        image: req.body.image,
        body: req.body.body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' '),
        author_id: req.body.author_id
    })

    Article.createNew(newArticle, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'An error occurred retrieving article data'
            })
        } else {
            console.log(data)
            res.redirect('/')
        }
    })
}

const showNewArticleForm = (req, res) => {
    res.render('create_article')
}


module.exports = {
    getAllArticles,
    getArticleSlug,
    createNewArticle,
    showNewArticleForm
}