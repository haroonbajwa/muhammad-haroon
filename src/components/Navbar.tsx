import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsOpen(false); // Close menu if open on mobile
  };

  const menuItems = ["Home", "About", "Projects", "Contact"];

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-95 backdrop-blur-md shadow-lg z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-blue-500">M</span>H
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  } transition duration-300`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-blue-400 focus:outline-none transition duration-300"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-md px-6 py-4 absolute top-full left-0 w-full shadow-lg"
        >
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `text-lg font-medium block py-2 px-4 rounded-lg ${
                      isActive
                        ? "text-blue-400 bg-gray-700"
                        : "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                    } transition duration-300`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
