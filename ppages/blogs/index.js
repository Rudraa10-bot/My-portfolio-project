import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import blogs from "../../data/blogs.json";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.content.slice(0, 50) + "..."}
            link={`/blogs/${blog.id}`}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
