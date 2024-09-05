// seed.js
import {PrismaClient} from "@prisma/client"
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Example: Creating some users
  await prisma.posts.createMany({
    data: [
      {
        title: 'The Future of Web Development: Trends to Watch in 2024',
        content: 'As we move further into 2024, web development is poised for exciting changes. Artificial Intelligence (AI) and Machine Learning (ML) are becoming integral, driving innovations like AI-powered design tools that streamline workflows and enhance creativity. Serverless architectures are gaining momentum, enabling developers to focus on writing code without managing infrastructure. Front-end frameworks like React, Vue, and Svelte continue to evolve, offering enhanced performance and better developer experiences. In addition, the push towards Progressive Web Apps (PWAs) is growing stronger, with more businesses realizing the benefits of faster, app-like experiences. WebAssembly (WASM) is also making waves, allowing developers to run high-performance code in browsers, opening new possibilities for complex web applications. These trends, along with improvements in DevOps practices, security enhancements, and the growing use of low-code/no-code platforms, make 2024 an exciting year for web developers. Staying updated on these trends is crucial for developers aiming to remain competitive in this ever-evolving field.'
      },
      {
        title: 'Understanding JavaScript Closures: A Comprehensive Guide',
        content: 'Closures are a fundamental concept in JavaScript that every developer should understand. At its core, a closure is a function that remembers its lexical scope even when the function is executed outside that scope. This unique feature allows for the creation of private variables, encapsulation, and powerful design patterns like the module pattern. Closures are particularly useful in scenarios where functions are returned from other functions or passed as arguments, such as in callbacks, higher-order functions, and event handlers. By mastering closures, developers can write more efficient, clean, and modular code. For example, closures enable creating factory functions that generate specific behaviors or objects without exposing internal variables or methods, enhancing both security and maintainability. Understanding closures also helps in debugging and optimizing memory usage, as they directly impact how variables are stored in the JavaScript engine. A solid grasp of closures is essential for advancing your JavaScript knowledge and becoming a more effective developer.'
      },
      {
        title: '10 Tips to Optimize Your Website for SEO in 2024',
        content: 'Optimizing your website for SEO in 2024 requires a multifaceted approach, starting with mobile-first indexing, as search engines prioritize mobile versions of websites. Ensure your site is fully responsive and offers a seamless experience across all devices. Implement structured data to help search engines understand your content better, improving your chances of appearing in rich snippets. Page speed is critical; utilize tools like Google PageSpeed Insights to identify and fix performance issues. High-quality content remains a priority; focus on producing relevant, in-depth articles that answer user queries effectively. Optimize images with appropriate alt text and compress them to reduce load times. Secure your website with HTTPS to build trust and rank higher. Leverage internal linking to guide users and search engines through your site. Regularly update old content to keep it fresh and accurate. Finally, prioritize user experience by minimizing pop-ups and ensuring easy navigation, making your site more engaging and user-friendly.'
      },
      {
        title: 'Introduction to TypeScript: Why You Should Start Using It',
        content: 'TypeScript is a powerful tool that enhances JavaScript by adding static types, making your code more predictable and reducing the likelihood of errors. With TypeScript, you can catch mistakes at compile time rather than runtime, saving time and effort in debugging. This strongly-typed nature also improves code readability and maintainability, making it easier for teams to collaborate on large-scale projects. TypeScript’s compatibility with existing JavaScript code means you can gradually adopt it in your projects without major disruptions. It supports modern JavaScript features and has excellent tooling support in popular IDEs, providing auto-completion, type checking, and refactoring tools. Additionally, TypeScript integrates seamlessly with popular frameworks like React, Angular, and Vue, enhancing your development experience. As the demand for robust, scalable applications grows, TypeScript offers a structured approach to managing complex codebases, making it an invaluable addition to any developer’s toolkit in 2024.'
      },
      {
        title: 'How to Build a RESTful API with Node.js and Express',
        content: 'Creating a RESTful API with Node.js and Express is an essential skill for modern web developers. Start by setting up your project with Node.js and installing Express, a minimalist web framework for Node. Define your API endpoints, such as GET, POST, PUT, and DELETE, which correspond to the CRUD operations. Use middleware like `body-parser` to handle incoming JSON data and `cors` to enable cross-origin requests. Implement route handlers that interact with your database, using a tool like Prisma or Sequelize for database management. Validate incoming data to ensure it meets the necessary criteria before processing it. Once your API is ready, test it using tools like Postman or Insomnia. Finally, deploy your API to a platform like Vercel or AWS, and ensure it’s secure and scalable by implementing HTTPS, rate limiting, and error handling. Building a robust API lays the foundation for powerful web applications.'
      },
      {
        title: 'The Future of Web Development: Trends to Watch in 2024',
        content: 'As we move further into 2024, web development is poised for exciting changes. Artificial Intelligence (AI) and Machine Learning (ML) are becoming integral, driving innovations like AI-powered design tools that streamline workflows and enhance creativity. Serverless architectures are gaining momentum, enabling developers to focus on writing code without managing infrastructure. Front-end frameworks like React, Vue, and Svelte continue to evolve, offering enhanced performance and better developer experiences. In addition, the push towards Progressive Web Apps (PWAs) is growing stronger, with more businesses realizing the benefits of faster, app-like experiences. WebAssembly (WASM) is also making waves, allowing developers to run high-performance code in browsers, opening new possibilities for complex web applications. These trends, along with improvements in DevOps practices, security enhancements, and the growing use of low-code/no-code platforms, make 2024 an exciting year for web developers. Staying updated on these trends is crucial for developers aiming to remain competitive in this ever-evolving field.'
      },
      {
        title: 'Understanding JavaScript Closures: A Comprehensive Guide',
        content: 'Closures are a fundamental concept in JavaScript that every developer should understand. At its core, a closure is a function that remembers its lexical scope even when the function is executed outside that scope. This unique feature allows for the creation of private variables, encapsulation, and powerful design patterns like the module pattern. Closures are particularly useful in scenarios where functions are returned from other functions or passed as arguments, such as in callbacks, higher-order functions, and event handlers. By mastering closures, developers can write more efficient, clean, and modular code. For example, closures enable creating factory functions that generate specific behaviors or objects without exposing internal variables or methods, enhancing both security and maintainability. Understanding closures also helps in debugging and optimizing memory usage, as they directly impact how variables are stored in the JavaScript engine. A solid grasp of closures is essential for advancing your JavaScript knowledge and becoming a more effective developer.'
      },
      {
        title: '10 Tips to Optimize Your Website for SEO in 2024',
        content: 'Optimizing your website for SEO in 2024 requires a multifaceted approach, starting with mobile-first indexing, as search engines prioritize mobile versions of websites. Ensure your site is fully responsive and offers a seamless experience across all devices. Implement structured data to help search engines understand your content better, improving your chances of appearing in rich snippets. Page speed is critical; utilize tools like Google PageSpeed Insights to identify and fix performance issues. High-quality content remains a priority; focus on producing relevant, in-depth articles that answer user queries effectively. Optimize images with appropriate alt text and compress them to reduce load times. Secure your website with HTTPS to build trust and rank higher. Leverage internal linking to guide users and search engines through your site. Regularly update old content to keep it fresh and accurate. Finally, prioritize user experience by minimizing pop-ups and ensuring easy navigation, making your site more engaging and user-friendly.'
      },
      {
        title: 'Introduction to TypeScript: Why You Should Start Using It',
        content: 'TypeScript is a powerful tool that enhances JavaScript by adding static types, making your code more predictable and reducing the likelihood of errors. With TypeScript, you can catch mistakes at compile time rather than runtime, saving time and effort in debugging. This strongly-typed nature also improves code readability and maintainability, making it easier for teams to collaborate on large-scale projects. TypeScript’s compatibility with existing JavaScript code means you can gradually adopt it in your projects without major disruptions. It supports modern JavaScript features and has excellent tooling support in popular IDEs, providing auto-completion, type checking, and refactoring tools. Additionally, TypeScript integrates seamlessly with popular frameworks like React, Angular, and Vue, enhancing your development experience. As the demand for robust, scalable applications grows, TypeScript offers a structured approach to managing complex codebases, making it an invaluable addition to any developer’s toolkit in 2024.'
      },
      {
        title: 'How to Build a RESTful API with Node.js and Express',
        content: 'Creating a RESTful API with Node.js and Express is an essential skill for modern web developers. Start by setting up your project with Node.js and installing Express, a minimalist web framework for Node. Define your API endpoints, such as GET, POST, PUT, and DELETE, which correspond to the CRUD operations. Use middleware like `body-parser` to handle incoming JSON data and `cors` to enable cross-origin requests. Implement route handlers that interact with your database, using a tool like Prisma or Sequelize for database management. Validate incoming data to ensure it meets the necessary criteria before processing it. Once your API is ready, test it using tools like Postman or Insomnia. Finally, deploy your API to a platform like Vercel or AWS, and ensure it’s secure and scalable by implementing HTTPS, rate limiting, and error handling. Building a robust API lays the foundation for powerful web applications.'
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
