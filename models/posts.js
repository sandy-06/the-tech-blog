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
      contents: {
        type: DataTypes.TEXT,
        allowNull: false,
        
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        },
        
    },
    
     {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'post',
     
    }
  );
  
  module.exports = Post;


//