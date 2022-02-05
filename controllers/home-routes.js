const router = require('express').Router();
const { Post } = require('../models')
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    console.log('hello')
    const dbPostData = await Post.findAll({})
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    console.log(posts)
    console.log(req.session.loggedIn);
    res.render('homepage', { posts, loggedIn: req.session.loggedIn  });
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

      router.get('/singlePost/:id', async (req, res) => {
        try{
          const post = await Post.findByPk(req.params.id,{
            raw: true
          });
          console.log(post)
          res.render('singlePost', {post: post });
        }catch (err) {
          console.log(err);
        }
            });
  
   
    


module.exports = router;
