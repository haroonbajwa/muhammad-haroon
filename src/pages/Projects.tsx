import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Virtual Supermarket",
    description:
      "A virtual grocery shopping platform built using Three.js, featuring 3D visualization of racks, shelves, and slots with products. Users can search for any product, and the system will indicate its location within the store.",
    tech: ["React", "Three.js", "JavaScript", "CSS", "Node.js", "MongoDB"],
    github: "https://github.com/haroonbajwa/virtual-supermarket",
    demo: null,
  },
  {
    title: "Meet Nest",
    description:
      "A meeting management app built with NestJS, designed to streamline scheduling and collaboration with a robust backend.",
    tech: ["NestJS", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/haroonbajwa/meet-nest",
    demo: null,
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task management application for organizing and tracking daily tasks with a clean, intuitive UI.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/haroonbajwa/task-manager",
    demo: null,
  },
  {
    title: "Point of Sale System",
    description:
      "A responsive POS system for small businesses to manage sales, inventory, and transactions efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/haroonbajwa/point-of-sale",
    demo: null,
  },
  {
    title: "Pizza Shop MERN",
    description:
      "A full-stack MERN app for ordering pizzas, featuring a dynamic menu and order tracking system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/haroonbajwa/Pizza_Shop_MERN",
    demo: null,
  },
  {
    title: "Memories Project MERN",
    description:
      "A MERN app for sharing and preserving personal memories with CRUD operations and auth.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/haroonbajwa/Memories_Project_MERN",
    demo: null,
  },
  {
    title: "Pizza Club Application",
    description:
      "A desktop application built using C# Windows Forms for managing fast food shop operations, including order processing, inventory management, and customer tracking.",
    tech: ["C#", ".NET Framework", "Windows Forms", "SQL Server"],
    github: "https://github.com/haroonbajwa/Pizza_Club_Application",
    demo: null,
  },
  {
    title: "React E-commerce App UI",
    description:
      "A sleek UI prototype for an e-commerce platform, showcasing responsive product listings and cart design.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/haroonbajwa/React_Ecommerce_App_UI",
    demo: null,
  },
  {
    title: "Users Profiles App",
    description:
      "A React app for managing and displaying user profiles with search and filter functionalities. It utilizes the JSONPlaceholder API for fetching user data and Material UI for designing the frontend.",
    tech: ["React", "JavaScript", "CSS", "Material UI", "JSONPlaceholder API"],
    github: "https://github.com/haroonbajwa/REACT_Users_Profiles_App",
    demo: null,
  },
  {
    title: "Group Video Chat App",
    description:
      "A real-time group video chat application built with React and WebRTC for seamless communication.",
    tech: ["React", "JavaScript", "WebRTC", "CSS", "Node.js", "Agora IO"],
    github: "https://github.com/haroonbajwa/REACT_Group_Video_Chat_App",
    demo: null,
  },
  {
    title: "HB Notepad MERN",
    description:
      "A MERN-based notepad app for creating, editing, and saving notes with a minimalist interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    github: "https://github.com/haroonbajwa/HB_Notepad_MERN",
    demo: null,
  },
  {
    title: "WebRTC Video Chat App",
    description:
      "A one-on-one video chat app leveraging WebRTC for secure, peer-to-peer video calls.",
    tech: ["React", "JavaScript", "WebRTC", "CSS", "Node.js", "Socket.io"],
    github: "https://github.com/haroonbajwa/REACT_Web_RTC_Video_Chat_App",
    demo: null,
  },
  {
    title: "YouTube Clone",
    description:
      "A React-based YouTube clone with video browsing and playback features, mimicking the platform’s core UI.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/REACT_Youtube_Clone",
    demo: null,
  },
  {
    title: "Medical Pager Chat App",
    description:
      "A chat app designed for medical professionals, enabling quick, secure communication in emergencies.",
    tech: ["React", "JavaScript", "CSS", "Node.js", "Stream-Chat", "Twilio"],
    github: "https://github.com/haroonbajwa/REACT_Medical_Pager_Chat_App",
    demo: null,
  },
  {
    title: "Travel Advisor",
    description:
      "A travel planning app built with React, integrating APIs to provide destination info and recommendations.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/REACT_Travel_Advisor",
    demo: null,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired React app with a responsive UI for browsing and streaming mock video content.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/React-Netflix-App",
    demo: null,
  },
  {
    title: "E-commerce Web App",
    description:
      "A full-featured e-commerce platform with product listings, cart, and checkout functionalities.",
    tech: ["React", "JavaScript", "Material UI", "Commerce.js"],
    github: "https://github.com/haroonbajwa/React_eCommerce_web_app",
    demo: null,
  },
  {
    title: "WebDev News Next.js",
    description:
      "A news aggregator for web development topics, built with Next.js for server-side rendering.",
    tech: ["Next.js", "React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/WebDev_News_NextJs",
    demo: null,
  },
  {
    title: "React Chat App",
    description:
      "A real-time chat application with React and Socket.io for instant messaging between users.",
    tech: ["React", "JavaScript", "CSS", "React Chat Engine"],
    github: "https://github.com/haroonbajwa/React_Chat_APP",
    demo: null,
  },
  {
    title: "React Weather App",
    description:
      "A weather forecasting app built with React, fetching live data from a weather API.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/React_Weather_APP",
    demo: null,
  },
  {
    title: "Recipe Search App",
    description:
      "A React app for searching and discovering recipes using an external API, with a clean UI.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    github: "https://github.com/haroonbajwa/React_Recipe_Search_App",
    demo: null,
  },
  {
    title: "COVID-19 Tracker",
    description:
      "A React app tracking COVID-19 stats globally, with data visualization and real-time updates.",
    tech: ["React", "JavaScript", "CSS", "API Integration", "Chart.js"],
    github: "https://github.com/haroonbajwa/COVID-19_Tracker_React_APP",
    demo: null,
  },
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 z-0" />

      <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          My <span className="text-blue-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border-2 border-blue-600 hover:bg-blue-600 cursor-pointer text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition duration-300"
                >
                  <FaGithub size={20} />
                  GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
