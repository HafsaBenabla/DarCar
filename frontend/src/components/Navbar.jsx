import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];



  return (
    <nav 
      className="fixed w-full z-50 transition-all duration-300 bg-transparent px-4"
    >
      
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-4xl font-extrabold text-black">
              Dar<span className="text-primary-800">Car</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 py-2 rounded-md text-xl font-bold relative group ${
                    location.pathname === item.path 
                      ? 'text-black font-bold underline underline-offset-8' 
                      : 'text-black hover:text-gray-800'
                  } transition-colors duration-200`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center text-black hover:text-gray-800 transition-colors text-2xl font-bold"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-600 mr-2">
                <FaUser className="h-4 w-4" />
              </div>
              <span className="text-2xl font-bold">Connexion</span>
            </Link>
            
            <Link
              to="/become-pro"
              className="px-5 py-2.5 bg-primary-600 text-white text-xl font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Devenir prestataire
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">

            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="pt-2 pb-4 space-y-1">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2.5 rounded-md text-2xl font-bold ${
                location.pathname === item.path
                  ? 'text-black underline underline-offset-8'
                  : 'text-black hover:text-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-2 border-t border-gray-200 mt-2">

            <Link
              to="/login"
              className="block px-2 py-2.5 text-2xl font-bold text-black hover:text-gray-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <FaUser className="h-4 w-4 mr-2 text-primary-600" />
                Connexion / Inscription
              </div>
            </Link>
            
            <Link
              to="/become-pro"
              className="block w-full mt-2 px-4 py-2.5 text-center text-2xl font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Devenir prestataire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
