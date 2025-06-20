import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaChevronDown, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchRef]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Comment ça marche', path: '/how-it-works' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2 backdrop-blur-sm bg-white/95' 
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Dar<span className="text-primary-800">Car</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium relative group ${
                    location.pathname === item.path 
                      ? 'text-primary-600 font-semibold' 
                      : 'text-gray-700 hover:text-primary-600'
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
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group" ref={searchRef}>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Rechercher"
              >
                <FaSearch className="h-5 w-5" />
              </button>
              
              {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100">
                  <form onSubmit={handleSearch} className="p-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher un service..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        autoFocus
                      />
                      <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <button 
                      type="submit" 
                      className="mt-2 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Rechercher
                    </button>
                  </form>
                </div>
              )}
            </div>
            
            <a 
              href="tel:+33123456789" 
              className="hidden lg:flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600 mr-2">
                <FaPhoneAlt className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500">Appelez-nous</div>
                <div className="font-medium text-sm">01 23 45 67 89</div>
              </div>
            </a>
            
            <div className="h-6 w-px bg-gray-200"></div>
            
            <Link
              to="/login"
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-600 mr-2">
                <FaUser className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Connexion</span>
            </Link>
            
            <Link
              to="/become-pro"
              className="ml-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              Devenir prestataire
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setSearchQuery('');
              }}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Rechercher"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            
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
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <div className="relative mb-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un service..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </form>
          </div>
          
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-2 border-t border-gray-200 mt-2">
            <a 
              href="tel:+33123456789" 
              className="flex items-center px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <FaPhoneAlt className="h-4 w-4 mr-2 text-primary-600" />
              Appeler le 01 23 45 67 89
            </a>
            
            <Link
              to="/login"
              className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <FaUser className="h-4 w-4 mr-2 text-primary-600" />
                Connexion / Inscription
              </div>
            </Link>
            
            <Link
              to="/become-pro"
              className="block w-full mt-2 px-4 py-2.5 text-center text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
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
