const router = require('express').Router();

const { Blog } = require('../../models');

// create a blog
router.post('/', async (req, res) => {
    Blog.create({
        ...req.body,
        user_id: req.session.user_id,  // accessing saved cookie
    })
        .then((newBlog) => {
            // send back the new blog as a JSON object
            res.json(newBlog);
        })
        .catch((err) => {
            res.json(err);
        });
});
// delete a blog
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(deletedBlog);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updatedBlog);

    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;

