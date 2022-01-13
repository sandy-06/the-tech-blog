const router = require('express').Router();
const { Post } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const Post = await Post.findAll({});
    res.status(200).json(posts);     
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post); 
       
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.status(200).json(post);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(post);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const post = await Comment.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(post);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;
