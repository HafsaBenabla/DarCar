import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ lightOnTop = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Vérifie l'état de connexion à chaque rendu
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('isAuthenticated'));
    setUserEmail(localStorage.getItem('userEmail'));
  }, [location]);

  // Gère l'effet de scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navIsSolid = isScrolled || lightOnTop;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300`;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${navIsSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className={`text-4xl font-extrabold ${navIsSolid ? 'text-gray-800' : 'text-white'}`}>
              Dar<span className="text-red-500">Car</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-16">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-semibold transition-colors duration-300 relative group ${
                    navIsSolid ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom--1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              {/* Lien Dashboard pour l'admin */}
              {isAuthenticated && userEmail === 'benablahafsa@gmail.com' && (
                <Link
                  to="/dashboard"
                  className={`text-xl font-semibold transition-colors duration-300 relative group ${navIsSolid ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'}`}
                >
                  Dashboard
                  <span className={`absolute bottom--1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full ${location.pathname === '/dashboard' ? 'w-full' : ''}`}></span>
                </Link>
              )}
            </div>

            {/* Right side buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    className={`flex items-center space-x-2 font-medium focus:outline-none ${navIsSolid ? 'text-gray-600 hover:text-red-600' : 'text-white hover:text-red-300'}`}
                    onClick={() => setShowProfileMenu((s) => !s)}
                  >
                    <FaUserCircle size={28} />
                  </button>
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                      <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mon profil</Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          localStorage.removeItem('isAuthenticated');
                          setShowProfileMenu(false);
                          setIsAuthenticated(false);
                          navigate('/');
                        }}
                      >Déconnexion</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className={`flex items-center space-x-2 font-medium ${navIsSolid ? 'text-gray-600 hover:text-red-600' : 'text-white hover:text-red-300'}`}>
                  <FaUser />
                  <span>Connexion</span>
                </Link>
              )}
              <Link to="/become-pro" className="bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                Devenir prestataire
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col h-12 w-12 justify-center items-center group"
              >
                <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3" : ""} ${navIsSolid && !isOpen ? "bg-gray-800" : "bg-white"}`} />
                <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""} ${navIsSolid && !isOpen ? "bg-gray-800" : "bg-white"}`} />
                <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3" : ""} ${navIsSolid && !isOpen ? "bg-gray-800" : "bg-white"}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'transform-none' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-white text-3xl font-bold hover:text-red-400 transition-colors ${location.pathname === link.path ? 'text-red-500' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-gray-700 w-4/5 text-center flex flex-col items-center space-y-6">
            {isAuthenticated ? (
              <div className="flex flex-col items-center space-y-2">
                <button className="text-white text-3xl flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <FaUserCircle />
                  <span>Profil</span>
                </button>
                <button
                  className="text-white text-xl hover:text-red-400"
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    setIsOpen(false);
                    setIsAuthenticated(false);
                    navigate('/');
                  }}
                >Déconnexion</button>
              </div>
            ) : (
              <Link to="/login" className="text-white text-2xl flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <FaUser />
                <span>Connexion</span>
              </Link>
            )}
            <Link to="/become-pro" className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold" onClick={() => setIsOpen(false)}>
              Devenir prestataire
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
