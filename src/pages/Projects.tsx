import { motion } from "framer-motion";

const projects = [
  {
    title: "Social Interaction App",
    tech: "MERN Stack",
    description:
      "A real-time social platform with chat and user interaction features.",
    github: "https://github.com/haroonbajwa",
  },
  {
    title: "Video Chat App",
    tech: "WebRTC, Socket.io, MERN",
    description: "A video conferencing app with real-time communication.",
    github: "https://github.com/haroonbajwa",
  },
  {
    title: "Virtual Supermarket",
    tech: "MERN Stack, Three.js",
    description: "A 3D virtual store with interactive racks and shelves.",
    github: "https://github.com/haroonbajwa",
  },
  {
    title: "Bestplant App",
    tech: "React.js, Node.js, Socket.io",
    description: "A smart manufacturing solution for real-time monitoring.",
    github: "https://github.com/haroonbajwa",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-blue-400 mb-4">{project.tech}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
