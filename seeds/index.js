const sequelize = require('../config/connection');
const { Blog } = require('../models');
// const seedBlog = require('./blogData');
const blogData = [
  {
    "title": "Tech",
    "content": "I think computers are great!",
    // "user_id": 1,
    "created_date": "2024-02-05"
  }
]

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedBlog();
const seedBlog = () => Blog.bulkCreate(blogData);
  await seedBlog();
  
  process.exit(0);
};

seedAll();
