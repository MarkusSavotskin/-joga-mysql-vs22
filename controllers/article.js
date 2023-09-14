const con = require('../utils/db')
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
    let query = `SELECT * FROM article, author WHERE article.slug='${req.params.slug}' AND article.author_id=author.author_id`
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result
        console.log(article)
        res.render('article', {
            article: article
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleSlug
}