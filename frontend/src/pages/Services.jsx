import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaSearch, FaStar, FaMapMarkerAlt, FaRegClock, FaFilter, FaTimes, FaCheckCircle, FaShieldAlt, FaUsers } from 'react-icons/fa';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // Récupérer les paramètres de recherche de l'URL
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    const urlLocation = searchParams.get('location');
    
    if (urlSearch) {
      setSearchTerm(urlSearch);
    }
    
    // Si une localisation est spécifiée, on peut l'utiliser pour filtrer
    if (urlLocation && urlLocation !== 'Partout au Maroc') {
      // Logique pour filtrer par localisation si nécessaire
    }
  }, [searchParams]);

  const categories = [
    { id: 'plomberie', name: 'Plomberie', icon: '🚿', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
    { id: 'menage', name: 'Ménage', icon: '🧹', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
    { id: 'garde-enfants', name: 'Garde d\'enfants', icon: '👶', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50' },
    { id: 'cours', name: 'Cours particuliers', icon: '📚', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
    { id: 'jardinage', name: 'Jardinage', icon: '🌱', color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-50' },
    { id: 'bricolage', name: 'Bricolage', icon: '🔨', color: 'from-amber-500 to-amber-600', bgColor: 'bg-amber-50' },
    { id: 'informatique', name: 'Informatique', icon: '💻', color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-50' },
    { id: 'coiffure', name: 'Coiffure', icon: '✂️', color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
  ];

  const providers = [
    {
      id: 1,
      name: 'Hassan Tazi',
      service: 'Plomberie',
      category: 'plomberie',
      rating: 4.8,
      reviews: 124,
      price: 150,
      priceType: 'par heure',
      location: 'Casablanca, Hay Hassani',
      bio: 'Plombier professionnel avec 10 ans d\'expérience. Spécialisé en dépannage et installation.',
      image: 'https://i.pinimg.com/736x/77/83/63/7783634e7d8ddd68b35aa5e128756c52.jpg',
      verified: true,
      available: true,
      responseTime: '2h',
      services: ['Dépannage', 'Installation', 'Entretien', 'Rénovation']
    },
    {
      id: 2,
      name: 'Amina El Fassi',
      service: 'Ménage',
      category: 'menage',
      rating: 4.9,
      reviews: 89,
      price: 80,
      priceType: 'par heure',
      location: 'Rabat, Agdal',
      bio: 'Professionnelle du ménage depuis 8 ans. Service impeccable et ponctuel.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true,
      available: true,
      responseTime: '1h',
      services: ['Ménage complet', 'Repassage', 'Organisation', 'Nettoyage écologique']
    },
    {
      id: 3,
      name: 'Sara Bennani',
      service: 'Garde d\'enfants',
      category: 'garde-enfants',
      rating: 4.7,
      reviews: 67,
      price: 60,
      priceType: 'par heure',
      location: 'Marrakech, Guéliz',
      bio: 'Éducatrice de jeunes enfants diplômée. Expérience avec tous les âges.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true,
      available: true,
      responseTime: '30min',
      services: ['Garde d\'enfants', 'Aide aux devoirs', 'Activités créatives', 'Sorties éducatives']
    },
    {
      id: 4,
      name: 'Youssef Alami',
      service: 'Jardinage',
      category: 'jardinage',
      rating: 4.6,
      reviews: 45,
      price: 120,
      priceType: 'par heure',
      location: 'Fès, Ville Nouvelle',
      bio: 'Jardinier passionné avec expertise en aménagement paysager et entretien.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true,
      available: true,
      responseTime: '3h',
      services: ['Tonte', 'Taille', 'Aménagement', 'Irrigation']
    },
    {
      id: 5,
      name: 'Leila Mansouri',
      service: 'Cours particuliers',
      category: 'cours',
      rating: 4.9,
      reviews: 78,
      price: 100,
      priceType: 'par heure',
      location: 'Agadir, Talborjt',
      bio: 'Professeure expérimentée en mathématiques et sciences. Méthode pédagogique adaptée.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true,
      available: true,
      responseTime: '1h',
      services: ['Mathématiques', 'Sciences', 'Français', 'Arabe']
    },
    {
      id: 6,
      name: 'Karim El Fassi',
      service: 'Bricolage',
      category: 'bricolage',
      rating: 4.5,
      reviews: 56,
      price: 140,
      priceType: 'par heure',
      location: 'Tanger, Malabata',
      bio: 'Bricoleur professionnel polyvalent. Réparation et installation de qualité.',
      image: 'https://i.pinimg.com/736x/39/05/a0/3905a0407a69eb0211a31e79ff4b8ec2.jpg',
      verified: true,
      available: true,
      responseTime: '4h',
      services: ['Réparation', 'Installation', 'Montage', 'Dépannage']
    }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    const matchesPrice = provider.price >= priceRange[0] && provider.price <= priceRange[1];
    const matchesRating = provider.rating >= ratingFilter;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`} 
      />
    ));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, 500]);
    setRatingFilter(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header avec recherche */}
        <div className="pt-20 pb-12 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trouvez le service qu'il vous faut
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Des professionnels qualifiés à votre service partout au Maroc
              </p>
              
              {/* Barre de recherche principale */}
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un service, un prestataire ou une ville..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 text-lg rounded-xl border-0 focus:ring-4 focus:ring-red-300 focus:outline-none shadow-lg"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu principal */}
        <div className="container mx-auto px-4 py-8">
          {/* Filtres et résultats */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filtres avancés */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Filtres</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Tout effacer
                  </button>
                </div>

                {/* Catégories */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Catégories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          selectedCategory === category.id 
                            ? 'border-red-500 bg-red-500' 
                            : 'border-gray-300'
                        }`}>
                          {selectedCategory === category.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fourchette de prix */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Prix (DH/heure)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{priceRange[0]} DH</span>
                      <span>{priceRange[1]} DH</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Note minimum */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Note minimum</h4>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRatingFilter(star)}
                        className={`p-1 rounded transition-colors ${
                          ratingFilter >= star ? 'bg-red-100' : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <FaStar className={`w-5 h-5 ${
                          ratingFilter >= star ? 'text-red-500' : 'text-gray-300'
                        }`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu principal */}
            <div className="flex-1">
              {/* En-tête des résultats */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {filteredProviders.length} prestataire{filteredProviders.length > 1 ? 's' : ''} trouvé{filteredProviders.length > 1 ? 's' : ''}
                    </h2>
                    {filteredProviders.length > 0 && (
                      <p className="text-gray-600 mt-1">
                        Prix de {Math.min(...filteredProviders.map(p => p.price))} à {Math.max(...filteredProviders.map(p => p.price))} DH/heure
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFilter className="text-red-500" />
                    <span className="text-sm text-gray-600">Filtres actifs</span>
                  </div>
                </div>
              </div>
              
              {/* Grille des prestataires */}
              {filteredProviders.length > 0 ? (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {filteredProviders.map((provider) => (
                    <div 
                      key={provider.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      {/* Image et badges */}
                      <div className="relative">
                        <img 
                          src={provider.image}
                          alt={provider.name}
                          className="w-full h-48 object-cover transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          {provider.verified && (
                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <FaCheckCircle className="w-3 h-3" />
                              Vérifié
                            </div>
                          )}
                          {provider.available && (
                            <div className="bg-white/90 backdrop-blur-sm text-red-600 px-2 py-1 rounded-full text-xs font-semibold border border-red-200">
                              Disponible
                            </div>
                          )}
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {provider.price} DH/h
                          </div>
                        </div>
                      </div>

                      {/* Contenu de la carte */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{provider.name}</h3>
                            <p className="text-red-600 font-semibold mb-2">{provider.service}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaMapMarkerAlt className="text-red-500 w-4 h-4" />
                              <span>{provider.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              {renderStars(provider.rating)}
                              <span className="text-sm text-gray-600">({provider.reviews})</span>
                            </div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <FaRegClock className="w-3 h-3" />
                              Réponse en {provider.responseTime}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{provider.bio}</p>

                        {/* Services proposés */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {provider.services.slice(0, 3).map((service, index) => (
                              <span 
                                key={index}
                                className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium border border-red-100"
                              >
                                {service}
                              </span>
                            ))}
                            {provider.services.length > 3 && (
                              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs border border-gray-200">
                                +{provider.services.length - 3} autres
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <Link 
                            to={`/prestataire/${provider.id}`}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors text-center font-semibold shadow-md hover:shadow-lg"
                          >
                            Voir le profil
                          </Link>
                          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors font-semibold border border-gray-200">
                            Contacter
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaSearch className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun résultat trouvé</h3>
                  <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche.</p>
                  <button 
                    onClick={clearFilters}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-md hover:shadow-lg"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;