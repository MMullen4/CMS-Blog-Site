const router = require('express').Router();

const comment = require('../models/comment.js')

// create a post
router.post('/', async (req, res) => {
    comment.create({
        title: req.body.title,
        author: req.body.author,
    })
        .then((newComment) => {
            // send back the new comment as a JSON object
            res.json(newComment);
        })
        .catch((err) => {
            res.json(err);
        });
});