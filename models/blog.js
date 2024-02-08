const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates the Blog model
class Blog extends Model { }

// create fields/columns for Blog model
Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
        // },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
          }
    },
    
    
{  // define table configuration options
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
)
module.exports = Blog;  // exporting Blog class to allow it to talk to the table