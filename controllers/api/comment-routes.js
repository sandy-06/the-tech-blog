const router = require('express').Router();
const { Comment } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const Comment = await Comment.findAll({});
    res.status(200).json(comments);     
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment); 
       
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    res.status(200).json(comment);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(comment);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const comment = await Comment.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(comment);
  }catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;
