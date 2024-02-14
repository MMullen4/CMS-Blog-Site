const sequelize = require('../config/connection');
const { Blog, User } = require('../models');
// const seedBlog = require('./blogData');
const blogData = [
  {
    "title": "Tech",
    "content": "I think computers are great!",
    "user_id": 1,
    "created_date": "2024-02-05"
  }
]
const userData = { // use keys from User.js model
  username: "Joe",
  email: "joe@yahoo.com",
  password: "abc123"
}

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.create(userData) // creates user handing userdata 
  
  // await seedBlog();
  const seedBlog = () => Blog.bulkCreate(blogData);
  await seedBlog();

  process.exit(0);
};

seedAll();
