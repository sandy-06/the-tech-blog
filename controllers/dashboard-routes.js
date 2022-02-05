const router = require('express').Router();

const { Post } = require('../models')
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
   Post.findAll({
       where: {
           userId: req.session.userId
       }
   }) .then(dbPostData => {
       console.log("we are here",dbPostData)
       res.render("dashboard", {posts: dbPostData})
   })
})
module.exports = router;