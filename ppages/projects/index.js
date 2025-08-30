import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        {projects.map((proj) => (
          <Card
            key={proj.id}
            title={proj.title}
            description={proj.description}
            link={`/projects/${proj.id}`}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}
