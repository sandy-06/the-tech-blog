const router = require('express').Router();
const { Post } = require('../models')
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({})
    
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

module.exports = router;
