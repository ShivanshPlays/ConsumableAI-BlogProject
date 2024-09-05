// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Example: Creating some users
  await prisma.posts.createMany({
    data: [
        { 
          title: 'The Future of Web Development: Trends to Watch in 2024', 
          content: 'Explore the latest trends in web development for 2024, including the rise of AI-driven tools, serverless architectures, and new advancements in front-end frameworks like React and Vue.' 
        },
        { 
          title: 'Understanding JavaScript Closures: A Comprehensive Guide', 
          content: 'Dive deep into the concept of closures in JavaScript, learn how they work, and understand their practical applications to improve your coding skills.' 
        },
        { 
          title: '10 Tips to Optimize Your Website for SEO in 2024', 
          content: 'Discover the top 10 SEO strategies to boost your website’s visibility in search engines, from optimizing for mobile to leveraging structured data.' 
        },
        { 
          title: 'Introduction to TypeScript: Why You Should Start Using It', 
          content: 'Learn about the benefits of using TypeScript in your web projects, including better code quality, error prevention, and improved developer experience.' 
        },
        { 
          title: 'How to Build a RESTful API with Node.js and Express', 
          content: 'A step-by-step guide on how to create a RESTful API using Node.js and Express, covering everything from setup to deployment.' 
        },
        { 
          title: 'A Beginner’s Guide to React Hooks', 
          content: 'Understand the fundamentals of React Hooks, including useState, useEffect, and custom hooks, to create more powerful and efficient React applications.' 
        },
        { 
          title: 'The Ultimate Guide to Responsive Web Design', 
          content: 'Learn how to create responsive web designs that work seamlessly across all devices using CSS media queries, flexible grids, and responsive images.' 
        },
        { 
          title: 'Getting Started with Prisma for Database Management', 
          content: 'An introductory guide to using Prisma as an ORM for managing your database, including setup, model definition, and basic CRUD operations.' 
        },
        { 
          title: 'Why You Should Learn Git and GitHub for Version Control', 
          content: 'Explore the importance of Git and GitHub in modern development workflows and how they can help you collaborate more effectively with other developers.' 
        },
        { 
          title: 'Top 5 Tools for Front-End Development in 2024', 
          content: 'Check out the best tools for front-end developers in 2024, including VS Code, Figma, Webpack, and more, to enhance your development experience.' 
        }
      ]
      
  });

  console.log('Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
