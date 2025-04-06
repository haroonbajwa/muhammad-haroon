import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <section className="min-h-[calc(100vh-8rem)] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex items-center justify-center py-16 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-lg w-full mx-auto px-6 text-center relative z-10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-20 h-20 mx-auto text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Message <span className="text-blue-400">Sent!</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Thank you for reaching out! I’ll get back to you as soon as possible.
        </p>

        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToHome}
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Success;
