import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import projects from "../../data/projects.json";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700">{project.description}</p>
      </main>
      <Footer />
    </div>
  );
}
