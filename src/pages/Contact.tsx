import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const Contact: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 flex items-center justify-center relative overflow-hidden">
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

      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full mx-auto px-6 relative z-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full shadow-md" />

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/haroonbajwa99@gmail.com"
          method="POST"
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          {/* Hidden Inputs for FormSubmit */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission"
          />
          <input
            type="hidden"
            name="_next"
            value="https://muhammadharoon.netlify.app/success"
          />{" "}
          {/* Update to live domain later */}
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! I’ll get back to you soon."
          />
          {/* Optionally disable reCAPTCHA for testing */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              rows={5}
              placeholder="Your message here..."
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Connect with Me
          </h3>
          <div className="flex justify-center gap-8">
            <motion.a
              href="mailto:haroonbajwa99@gmail.com"
              className="text-blue-400 hover:text-blue-500 transition flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 mb-2"
              >
                <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.287l-12-8.713v13.713h24v-13.713l-12 8.713z" />
              </svg>
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/haroonbajwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 mb-2"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.865 0-2.151 1.459-2.151 2.967v5.698h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
              </svg>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/haroonbajwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 mb-2"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.77-1.585 8.205-6.082 8.205-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
