import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Blog content (could later come from DB/Markdown)
  const blogContent = {
    "getting-started-with-react": {
      title: "🚀 Getting Started with React",
      content: `
        React is a popular JavaScript library for building interactive user interfaces. It allows developers to create reusable components that manage their own state and efficiently update the DOM.

Key concepts:
- **Components**: The building blocks of React apps. Each component represents a part of the UI.
- **JSX**: A syntax extension that lets you write HTML-like code inside JavaScript.
- **Props**: Short for properties, they allow you to pass data from parent to child components.
- **State**: Local data that a component manages and can change over time.
- **Virtual DOM**: React uses a virtual DOM to update only the parts of the page that have changed, improving performance.

Getting started:
1. Install Node.js and npm.
2. Use "npx create-react-app my-app" to create a new React project.
3. Run "npm start" to launch the development server.
4. Start building your first component!

React makes UI development easier, reusable, and fast. With practice, you can build complex apps with minimal code.

      `,
    },
    "introduction-to-cybersecurity": {
      title: "🔒 Introduction to Cybersecurity",
      content: `
        Cybersecurity is the practice of protecting computers, networks, and data from unauthorized access, attacks, or damage. In today’s digital world, it’s essential for businesses, governments, and individuals to secure their digital assets.

Key areas:
- **Network Security**: Protecting the integrity of networks and devices.
- **Application Security**: Ensuring software is secure from vulnerabilities.
- **Information Security**: Protecting sensitive data from leaks or theft.
- **Ethical Hacking**: Identifying vulnerabilities before malicious hackers can exploit them.

Tips for beginners:
- Learn basic networking concepts (TCP/IP, DNS, firewalls).
- Understand common attack types (phishing, malware, DDoS).
- Practice on platforms like TryHackMe, Hack The Box, or CyberSec Labs.
- Stay updated with security news and tools.

Cybersecurity is a constantly evolving field with lots of career opportunities, from security analyst to ethical hacker.

      `,
    },
    "javascript-es6-features": {
      title: "⚡ JavaScript ES6 Features",
      content: `
        ES6 (ECMAScript 2015) introduced many modern features that make JavaScript easier to write, read, and maintain. One of the most useful features is **arrow functions**, which provide a shorter syntax for defining functions and help avoid common issues with the "this" keyword. **Template literals** allow you to embed variables and expressions directly into strings using backticks, making string handling much cleaner. **Destructuring** lets you extract values from objects or arrays quickly, reducing repetitive code. **Default parameters** enable you to assign default values to function arguments, avoiding undefined errors when arguments are missing. ES6 also introduced **modules**, allowing you to use "import" and "export" to organize your code into reusable pieces. Finally, **Promises** simplify working with asynchronous operations, making it easier to handle tasks like fetching data from APIs. Learning and using these ES6 features will help you write more efficient, readable, and modern JavaScript code.

      `,
    },
  };

  const post = blogContent[slug];

  if (!post) return <p className="p-6">Blog not found</p>;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
    <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-6">
            <BackButton href="/blogs" label="⬅ Back to Blogs" />
        </div>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-300 whitespace-pre-line">{post.content}</p>
      </main>
      <Footer/>
    </div>
  );
}
