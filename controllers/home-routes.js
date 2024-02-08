// home-routes that will deliver each of the pages

const router = require('express').Router();
const { User , Blog, Comment } = require('../models');
// Import custom middleware 

const withAuth = require('../utils/auth');

// GET All blogs from the database
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the frontend template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass serialized data and session flag into handlebars template
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  // Get Blog by Primary key and include comment & username
router.get('/blog/:id', withAuth, async (req, res) => {
  
    try {
      const blogdata = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'username',              
            ],
          },
          {
            model: Comment,
            include: [
              {
                model: User,
                attributes: [
                  'username',
                ]
              }
            ]
          }
        ],
      });
      // Serialize data so the frontend handlebars template can read it
      const blog = blogdata.get({ plain: true });
      res.render('blog', { blog, loggedIn: req.session.loggedIn });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// edit blog page
router.get('/editblog/:id', async (req, res) => {
  try {
    const blogdata = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'username',
          ],
        },
      ],
    });
    const blog = blogdata.get({ plain: true });
    res.render('editblog', { blog, loggedIn: req.session.loggedIn });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  }
);

// dashboard page route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      }
      // // include: [
      //   {
      //     model: User,
      //     attributes: ['username'],
      //   },
      // const userData = await User.findByPk(req.session.user_id, {
      //   attributes: { exclude: ['password'] },
      //   include: [{ model: Blog }],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // const user = blogData.get({ plain: true });

    res.render('dashboard', {
      blogs,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {  // route to login page
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
