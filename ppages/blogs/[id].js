import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blogs from "../../data/blogs.json";

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700">{blog.content}</p>
      </main>
      <Footer />
    </div>
  );
}
