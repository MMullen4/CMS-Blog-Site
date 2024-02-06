const router = require('express').Router();

const { Comment } = require('../../models');

// create a post
router.post('/', async (req, res) => {
    Comment.create({
        ...req.body,
        user_id: req.session.user_id,

    })
        .then((newComment) => {
            // send back the new comment as a JSON object
            res.json(newComment);
        })
        .catch((err) => {
            res.json(err);
        });
});
module.exports = router;
