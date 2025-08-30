import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-600">Explore my blogs and projects</p>
      </main>
      <Footer />
    </div>
  );
}
