import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function Blogs() {
  const blogPosts = [
    {
      slug: "getting-started-with-react",
      title: "🚀 Getting Started with React",
      description:
        "A beginner-friendly guide to building your first React component and understanding the basics of JSX.",
    },
    {
      slug: "introduction-to-cybersecurity",
      title: "🔒 Introduction to Cybersecurity",
      description:
        "A quick overview of why cybersecurity is important and how you can start exploring this exciting field.",
    },
    {
      slug: "javascript-es6-features",
      title: "⚡ JavaScript ES6 Features",
      description:
        "Learn about arrow functions, template literals, and other modern features of JavaScript that make coding easier.",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <BackButton href="/" label="⬅ Back to Home" />
      </div>
      <h1 className="text-3xl font-bold mb-4">My Blogs</h1>
      <p className="mb-6 text-gray-300">
        Here are some blogs I have written about coding, technology, and learning.
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:bg-gray-700 transition-transform duration-300">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-400">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

