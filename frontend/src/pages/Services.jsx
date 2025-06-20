import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  FaSearch, 
  FaStar, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaRegClock, 
  FaFilter, 
  FaTimes,
  FaInfoCircle
} from 'react-icons/fa';

const Services = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Services disponibles avec plus de détails
  const categories = [
    { 
      id: 'plomberie', 
      name: 'Plomberie', 
      icon: '🚿',
      description: 'Dépannage et installation de plomberie par des professionnels qualifiés',
      color: 'from-blue-100 to-blue-50',
      textColor: 'text-blue-600'
    },
    { 
      id: 'menage', 
      name: 'Ménage', 
      icon: '🧹',
      description: 'Services de ménage professionnel pour un intérieur impeccable',
      color: 'from-green-100 to-green-50',
      textColor: 'text-green-600'
    },
    { 
      id: 'garde-enfants', 
      name: 'Garde d\'enfants', 
      icon: '👶',
      description: 'Garde d\'enfants à domicile par des professionnels de la petite enfance',
      color: 'from-pink-100 to-pink-50',
      textColor: 'text-pink-600'
    },
    { 
      id: 'cours', 
      name: 'Cours particuliers', 
      icon: '📚',
      description: 'Soutien scolaire et cours particuliers à domicile',
      color: 'from-purple-100 to-purple-50',
      textColor: 'text-purple-600'
    },
    { 
      id: 'jardinage', 
      name: 'Jardinage', 
      icon: '🌱',
      description: 'Entretien et aménagement de jardins et espaces verts',
      color: 'from-emerald-100 to-emerald-50',
      textColor: 'text-emerald-600'
    },
    { 
      id: 'bricolage', 
      name: 'Bricolage', 
      icon: '🔨',
      description: 'Travaux de bricolage et rénovation à domicile',
      color: 'from-amber-100 to-amber-50',
      textColor: 'text-amber-600'
    },
    { 
      id: 'informatique', 
      name: 'Informatique', 
      icon: '💻',
      description: 'Dépannage et assistance informatique à domicile',
      color: 'from-indigo-100 to-indigo-50',
      textColor: 'text-indigo-600'
    },
    { 
      id: 'coiffure', 
      name: 'Coiffure', 
      icon: '✂️',
      description: 'Services de coiffure et beauté à domicile',
      color: 'from-red-100 to-red-50',
      textColor: 'text-red-600'
    },
  ];

  // Exemple de prestataires avec plus de détails
  const providers = [
    {
      id: 1,
      name: 'Jean Dupont',
      service: 'Plomberie',
      category: 'plomberie',
      rating: 4.8,
      reviews: 124,
      price: 40,
      available: 'Aujourd\'hui',
      location: 'Paris 15e',
      bio: 'Plombier professionnel avec 10 ans d\'expérience. Spécialisé dans la rénovation de salles de bain et la réparation de fuites.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['Fuite d\'eau', 'Robinetterie', 'Salle de bain']
    },
    {
      id: 2,
      name: 'Marie Laurent',
      service: 'Ménage',
      category: 'menage',
      rating: 4.9,
      reviews: 89,
      price: 25,
      available: 'Demain',
      location: 'Lyon 2e',
      bio: 'Professionnelle du ménage depuis 8 ans. Je m\'occupe de votre intérieur avec soin et professionnalisme.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['Ménage complet', 'Repassage', 'Vitres']
    },
    {
      id: 3,
      name: 'Sophie Martin',
      service: 'Garde d\'enfants',
      category: 'garde-enfants',
      rating: 4.7,
      reviews: 67,
      price: 15,
      available: 'Ce week-end',
      location: 'Marseille 8e',
      bio: 'Éducatrice de jeunes enfants diplômée. Je propose des activités éducatives et ludiques pour vos enfants.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      tags: ['Sortie d\'école', 'Garde périscolaire', 'Baby-sitting']
    },
    {
      id: 4,
      name: 'Thomas Dubois',
      service: 'Cours particuliers',
      category: 'cours',
      rating: 4.9,
      reviews: 112,
      price: 30,
      available: 'En ligne',
      location: 'Toulouse',
      bio: 'Professeur de mathématiques avec 12 ans d\'expérience dans le soutien scolaire. Méthodes pédagogiques adaptées à chaque élève.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      tags: ['Maths', 'Physique', 'Prépa bac']
    },
  ];

  // Filtrage des prestataires
  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         provider.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    const matchesPrice = provider.price >= priceRange[0] && provider.price <= priceRange[1];
    const matchesRating = provider.rating >= rating;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });
  
  const [selectedService, setSelectedService] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Gestion du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonction pour générer les étoiles de notation
  const renderStars = (rating) => {
    return (
      <>
        {Array(5).fill(0).map((_, i) => (
          <FaStar 
            key={i} 
            className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`} 
          />
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Trouvez un prestataire</h1>
          <div className="flex flex-col lg:flex-row gap-8">
              {/* Filtres - Version Desktop */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filtres</h2>
                    <button 
                      onClick={() => {
                        setSelectedCategory('');
                        setPriceRange([0, 100]);
                        setRating(0);
                      }}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Réinitialiser
                    </button>
                  </div>
                
                  {/* Catégorie */}
                  <div className="mb-6">
                  <h3 className="font-medium mb-3">Catégorie</h3>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 focus:border-transparent"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Toutes les catégories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Prix */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Prix maximum: {priceRange[1]}€/h</h3>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0€</span>
                    <span>100€+</span>
                  </div>
                </div>
                
                {/* Note minimale */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Note minimale</h3>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        {star <= rating ? '★' : '☆'}
                      </button>
                    ))}
                    {rating > 0 && (
                      <button 
                        onClick={() => setRating(0)}
                        className="ml-2 text-sm text-gray-500"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
            
            {/* Contenu principal */}
            <div className="flex-1">
              {/* Filtres mobiles */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <FaFilter className="text-red-600" />
                  <span>Filtres</span>
                  {(selectedCategory || rating > 0 || priceRange[1] < 100) && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {[selectedCategory, rating > 0, priceRange[1] < 100].filter(Boolean).length}
                    </span>
                  )}
                </button>
                
                {showFilters && (
                  <div className="mt-4 bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold">Filtres</h2>
                      <button 
                        onClick={() => setShowFilters(false)}
                        className="text-gray-500"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    
                    {/* Catégorie */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Catégorie</h3>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="">Toutes les catégories</option>
                        {categories.map(cat => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Prix */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Prix maximum: {priceRange[1]}€/h</h3>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>0€</span>
                        <span>100€+</span>
                      </div>
                    </div>
                    
                    {/* Note minimale */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Note minimale</h3>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setRating(star)}
                            className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            {star <= rating ? '★' : '☆'}
                          </button>
                        ))}
                        {rating > 0 && (
                          <button 
                            onClick={() => setRating(0)}
                            className="ml-2 text-sm text-gray-500"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
                    >
                      Voir les résultats
                    </button>
                  </div>
                )}
              </div>
              
              {/* Catégories */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Catégories populaires</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <div 
                      key={category.id}
                      className={`relative h-40 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id ? 'ring-2 ring-red-500' : ''}`}
                      onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
                    >
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} flex flex-col items-center justify-center p-4 text-center`}
                      >
                        <span className="text-3xl mb-2">{category.icon}</span>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-xs opacity-80 mt-1">{category.description}</p>
                      </div>
                      {selectedCategory === category.id && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <span className="bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">Sélectionné</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Résultats */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {filteredProviders.length} prestataire{filteredProviders.length > 1 ? 's' : ''} trouvé{filteredProviders.length > 1 ? 's' : ''}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Trier par :</span>
                    <select className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-300">
                      <option>Pertinence</option>
                      <option>Meilleures notes</option>
                      <option>Prix croissant</option>
                      <option>Prix décroissant</option>
                    </select>
                  </div>
                </div>
                
                {filteredProviders.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProviders.map((provider, index) => (
                      <div 
                        key={provider.id}
                        className="group relative h-96 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                        onMouseEnter={() => setHoveredCard(provider.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Côté avant */}
                        <div 
                          className={`absolute inset-0 transition-transform duration-500 ${hoveredCard === provider.id ? 'opacity-0 -rotate-y-180' : 'opacity-100 rotate-y-0'}`}
                          style={{
                            backgroundImage: `url(${provider.image || 'https://via.placeholder.com/400x300'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backfaceVisibility: 'hidden'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-xl font-bold">{provider.name}</h3>
                                  <p className="text-sm opacity-90">{provider.service}</p>
                                </div>
                                <div className="bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
                                  {provider.price}€/h
                                </div>
                              </div>
                              <div className="flex items-center mt-2">
                                <div className="flex">
                                  {renderStars(provider.rating)}
                                </div>
                                <span className="ml-2 text-sm opacity-90">({provider.reviews})</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Côté arrière */}
                        <div 
                          className={`absolute inset-0 bg-white p-6 transition-transform duration-500 ${hoveredCard === provider.id ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'}`}
                          style={{
                            backfaceVisibility: 'hidden',
                            transform: hoveredCard === provider.id ? 'rotateY(0deg)' : 'rotateY(180deg)'
                          }}
                        >
                          <div className="h-full flex flex-col">
                            <div className="flex-1">
                              <div className="flex items-center mb-4">
                                <img 
                                  src={provider.image} 
                                  alt={provider.name} 
                                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-200"
                                />
                                <div>
                                  <h3 className="font-bold text-lg">{provider.name}</h3>
                                  <p className="text-red-600 font-medium">{provider.service}</p>
                                </div>
                              </div>
                              
                              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {provider.bio}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {provider.tags.map((tag, i) => (
                                  <span key={i} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-600 mb-2">
                                <FaMapMarkerAlt className="mr-2 text-red-500" />
                                <span>{provider.location}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-4">
                                <FaRegClock className="mr-2 text-red-500" />
                                <span>Disponible: {provider.available}</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                              <div className="flex items-center">
                                <div className="flex">
                                  {renderStars(provider.rating)}
                                </div>
                                <span className="ml-2 text-sm text-gray-500">({provider.reviews})</span>
                              </div>
                              <Link 
                                to={`/prestataire/${provider.id}`}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                              >
                                Réserver <FaArrowRight className="ml-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                    <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <FaInfoCircle className="text-red-500 text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.</p>
                    <button 
                      onClick={() => {
                        setSelectedCategory('');
                        setPriceRange([0, 100]);
                        setRating(0);
                        setSearchTerm('');
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}
              {/* Close results wrapper div */}
              </div>
              {/* Close main content wrapper div */}
              </div>
        </main>
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">DarCar</h3>
              <p className="text-gray-400">Votre plateforme de services à domicile</p>
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-blue-400">À propos</a>
              <a href="/services" className="hover:text-blue-400">Services</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
              <a href="/privacy" className="hover:text-blue-400">Confidentialité</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DarCar. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
