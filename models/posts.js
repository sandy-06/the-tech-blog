const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const  {format_date} = require('../utils/helpers');

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
          type: DataTypes.DATE,
          default: sequelize.literal('NOW()'),
         // get: createdAtVal => format_date(createdAtVal)
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