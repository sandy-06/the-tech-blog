const User = require('./User');
const Post = require('./posts');
const Comment = require('./comment')


User.hasMany(Post);

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
User.hasMany(Comment);














module.exports = { User ,Post, Comment};
