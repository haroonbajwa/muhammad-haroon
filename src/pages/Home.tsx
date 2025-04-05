import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import profileImage from "../assets/haroon.png";

const Home: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center py-16 relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#3b82f6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Particles */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I’m <span className="text-blue-500">Muhammad Haroon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            MERN Stack Developer | Automation Enthusiast
          </p>
          <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
            Building scalable, innovative web solutions with a passion for
            real-time systems and cloud technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Right: Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src={profileImage}
            alt="Muhammad Haroon"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-blue-500 shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
