import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import profileImage from "../assets/haroon.png";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJenkins,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaWordpress,
  FaShopify,
  FaPhp,
  FaOpencart,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiNextdotjs,
  SiGraphql,
  SiBitbucket,
  SiTypescript,
  SiJquery,
  SiSass,
  SiRedux,
  SiWebrtc,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRedis,
  SiRabbitmq,
  SiKubernetes,
  SiGnubash,
  SiJira,
  SiTrello,
  SiSlack,
  SiWoocommerce,
  SiMagento,
  SiBigcommerce,
  SiJfrogpipelines,
} from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscTerminalPowershell, VscAzure } from "react-icons/vsc";
import { TbBrandThreejs } from "react-icons/tb";

const skillCategories = {
  Frontend: [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Context API", icon: <FaReact className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Three.js", icon: <TbBrandThreejs className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
    { name: "Sass", icon: <SiSass className="text-pink-500" /> },
    { name: "WebRTC", icon: <SiWebrtc className="text-green-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-600" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600" /> },
    {
      name: "Illustrator",
      icon: <SiAdobeillustrator className="text-orange-500" />,
    },
    { name: "Canva", icon: <SiCanva className="text-green-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "REST API", icon: <SiGraphql className="text-blue-600" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
  ],
  "DevOps & Automation": [
    { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    { name: "Jenkins", icon: <FaJenkins className="text-red-500" /> },
    { name: "AWS EC2", icon: <FaAws className="text-orange-400" /> },
    { name: "Azure", icon: <VscAzure className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Bitbucket", icon: <SiBitbucket className="text-blue-700" /> },
    { name: "CI/CD", icon: <SiJfrogpipelines className="text-blue-400" /> },
    { name: "Bash", icon: <SiGnubash className="text-green-500" /> },
    {
      name: "PowerShell",
      icon: <VscTerminalPowershell className="text-blue-600" />,
    },
    { name: "Server Deployment", icon: <FaAws className="text-orange-400" /> },
  ],
  "Project Management & Collaboration": [
    { name: "JIRA", icon: <SiJira className="text-blue-600" /> },
    { name: "Bitbucket", icon: <SiBitbucket className="text-blue-700" /> },
    { name: "Trello", icon: <SiTrello className="text-blue-600" /> },
    { name: "Slack", icon: <SiSlack className="text-purple-500" /> },
    {
      name: "Microsoft Teams",
      icon: <BsMicrosoftTeams className="text-blue-600" />,
    },
    { name: "Agile/Scrum", icon: <SiBitbucket className="text-blue-700" /> },
  ],
  "WordPress & Shopify": [
    { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
    { name: "Shopify", icon: <FaShopify className="text-green-600" /> },
    { name: "WooCommerce", icon: <SiWoocommerce className="text-blue-600" /> },
    { name: "Magento", icon: <SiMagento className="text-orange-500" /> },
    { name: "BigCommerce", icon: <SiBigcommerce className="text-blue-600" /> },
    { name: "OpenCart", icon: <FaOpencart className="text-red-500" /> },
    { name: "Liquid", icon: <FaShopify className="text-green-600" /> },
    { name: "PHP", icon: <FaPhp className="text-blue-600" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
  ],
};

const About: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#3b82f6" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >
        {/* Profile Photo */}
        <motion.img
          src={profileImage}
          alt="Muhammad Haroon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl object-cover"
        />

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mb-10 rounded-full shadow-md" />

        {/* Summary */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          I’m Muhammad Haroon, a passionate MERN Stack Developer with over 3
          years of experience crafting scalable, secure, and high-performance
          web applications. I specialize in full-stack development, real-time
          systems, and DevOps, delivering innovative solutions that blend
          cutting-edge technology with seamless user experiences.
        </p>

        {/* Skills by Category */}
        {Object.entries(skillCategories).map(
          ([category, skillsList], catIndex) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 bg-gray-800 py-2 px-4 rounded-lg inline-block shadow-md">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {skillsList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: catIndex * 0.5 + index * 0.1,
                    }}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-700 transition duration-300"
                  >
                    <div className="text-3xl md:text-4xl mb-3">
                      {skill.icon}
                    </div>
                    <span className="text-sm md:text-base text-white font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        )}

        {/* Experience Timeline */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 bg-gray-800 py-2 px-4 rounded-lg inline-block shadow-md">
          Professional Journey
        </h3>
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full shadow-md" />
            <h4 className="text-xl font-bold text-blue-400">
              MERN Developer, Iyrix Technologies
            </h4>
            <p className="text-gray-400 text-sm">Sep 2022 - Present</p>
            <p className="text-gray-300 mt-2">
              Developed the Bestplant App, enhancing real-time monitoring and
              industrial automation with a focus on scalability and performance.
            </p>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-blue-500 rounded-full shadow-md" />
            <h4 className="text-xl font-bold text-blue-400">
              WordPress & Shopify Developer
            </h4>
            <p className="text-gray-400 text-sm">2019 - Present</p>
            <p className="text-gray-300 mt-2">
              Delivered custom, high-performance eCommerce solutions, optimizing
              for speed and user engagement.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
