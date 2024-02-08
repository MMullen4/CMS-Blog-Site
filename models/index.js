const User = require('./User');
const Blog = require('./blog.js')
const Comment = require('./comment.js')

// creates associations using foreign keys
User.hasMany(Blog, {
  foreignKey: 'user_id',  // if user is deleted, delete all associated blogs
})
Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'  // if user is deleted, delete all associated blogs
})
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',  // if blog is deleted, delete all associated comments
})
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE' // if blog is deleted, delete all associated comments
})
User.hasMany(Comment, {  
  foreignKey: 'user_id', // if user is deleted, delete all associated comments 
})
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'  // if user is deleted, delete all associated comments
})

// exports associations to be used in other files
module.exports = { User, Blog, Comment };
