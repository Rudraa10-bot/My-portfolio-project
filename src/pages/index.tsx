import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold text-blue-600">
            Welcome to My Portfolio 🚀
        </h1>

        <p className="text-gray-300 mt-4">
          Explore my blogs and projects
        </p>

        <div className="mt-8 flex space-x-6">
          <Link href="/blogs" className="text-blue-400 hover:underline">
            Blogs
          </Link>
          <Link href="/projects" className="text-blue-400 hover:underline">
            Projects
          </Link>
          <Link href="/about" className="text-blue-400 hover:underline">
            About
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
