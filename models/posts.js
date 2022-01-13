const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


//post a blog,title content date created
class Post extends Model {
    
    
  }
  
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        
        },
      
      
    },
    
     {
      sequelize,
     
}
  );
  
  module.exports = Post;


//