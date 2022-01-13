const User = require('./User');
const Post = require('./posts');
const Comment = require('./comment')


Post.belongsTo (User, { 
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo (User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
})













module.exports = { User ,Post, Comment};
