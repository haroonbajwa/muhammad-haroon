import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-md p-4 shadow-lg z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-blue-500">M</span>H
        </h1>
        <ul className="flex space-x-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <NavLink
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  } transition duration-300`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;