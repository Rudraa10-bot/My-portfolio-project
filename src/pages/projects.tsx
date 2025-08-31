import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
    <main className="p-6 max-w-4xl mx-auto">
       <div className="mb-6">
        <BackButton href="/" label="⬅ Back to Home" />
      </div>
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="mb-6 text-gray-300 mb-6">
          Here are some of the projects I’ve worked on. (coming soon 🚀)
        </p>

        <div className="space-y-6">
          {/* Placeholder card if no projects yet */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-md flex items-center justify-center">
            <p className="text-gray-400 italic">
              No projects added yet. Stay tuned for updates! ✨
            </p>
          </div>
        </div>
      </main>

      <Footer/>
      </div>
  );
}

export default Projects;
