import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackButton from "@/components/BackButton";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
            <BackButton href="/" label="⬅ Back to Home" />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">About Me</h1>
        <p className="mb-4">
          Hi, I am Rudra, a 2nd-year B.Tech CSE student passionate about Web Development, 
          Cloud, and Cybersecurity.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Education</h2>
        <p>B.Tech in Computer Science, SRM Institute of Science and Technology.</p>
        
        <h2 className="text-2xl font-semibold mt-6">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Frontend: HTML, CSS, JavaScript, React, Next.js, TailwindCSS</li>
          <li>Backend: Node.js, APIs (Learning)</li>
          <li>Cybersecurity Basics</li>
          <li>Other Languages: C,C++,Java</li>
        </ul>
      </main>
      <Footer />
    </div>
    </div>
  );
}
