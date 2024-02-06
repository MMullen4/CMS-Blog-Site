const router = require('express').Router();

const blog = require('../models/blog-routes.js');

// create a blog
router.post('/', async (req, res) => {
    blog.create({
        title: req.body.title,
        author: req.body.author,
    })
        .then((newBlog) => {
            // send back the new blog as a JSON object
            res.json(newBlog);
        })
        .catch((err) => {
            res.json(err);
        });
});