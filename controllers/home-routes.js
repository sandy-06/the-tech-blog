const router = require('express').Router();
const { Post } = require('../models')
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({})
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });
  }catch (err) {
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

router.get('/post/id', async (req, res) => {
  try{
    const post = await Post.findByPk(req.params.id,{
      raw: true
    });
    res.render('post', {post: post});
  }catch (err) {
    console.log(err);
  }
      });

  
      


module.exports = router;
