const router = require('express').Router();
const { Post, Comment, User } = require('../models')
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    console.log('hello')
    const dbPostData = await Post.findAll({})
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts)
    console.log(req.session.loggedIn);
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



router.get('/singlePost/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      
      include: [
        User,
        {
          model: Comment, 
          include: [User]
        }
      ]
    });
    console.log('this is a post', post)
    res.render('singlePost', { post: post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
  }
});





module.exports = router;
