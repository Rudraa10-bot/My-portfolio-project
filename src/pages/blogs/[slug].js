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
        React is a powerful library for building user interfaces...
        (Here you can write your full blog content about React)
      `,
    },
    "introduction-to-cybersecurity": {
      title: "🔒 Introduction to Cybersecurity",
      content: `
        Cybersecurity is all about protecting systems, networks, and programs...
        (Full blog article goes here)
      `,
    },
    "javascript-es6-features": {
      title: "⚡ JavaScript ES6 Features",
      content: `
        ES6 introduced many features such as arrow functions, template literals...
        (Full blog article goes here)
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
