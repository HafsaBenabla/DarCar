import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FaSearch, FaStar, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'plomberie', name: 'Plomberie', icon: '🚿', color: 'from-blue-100 to-blue-50' },
    { id: 'menage', name: 'Ménage', icon: '🧹', color: 'from-green-100 to-green-50' },
    { id: 'garde-enfants', name: 'Garde d\'enfants', icon: '👶', color: 'from-pink-100 to-pink-50' },
    { id: 'cours', name: 'Cours particuliers', icon: '📚', color: 'from-purple-100 to-purple-50' },
    { id: 'jardinage', name: 'Jardinage', icon: '🌱', color: 'from-emerald-100 to-emerald-50' },
    { id: 'bricolage', name: 'Bricolage', icon: '🔨', color: 'from-amber-100 to-amber-50' },
    { id: 'informatique', name: 'Informatique', icon: '💻', color: 'from-indigo-100 to-indigo-50' },
    { id: 'coiffure', name: 'Coiffure', icon: '✂️', color: 'from-red-100 to-red-50' },
  ];

  const providers = [
    {
      id: 1,
      name: 'Jean Dupont',
      service: 'Plomberie',
      category: 'plomberie',
      rating: 4.8,
      reviews: 124,
      price: 40,
      location: 'Paris 15e',
      bio: 'Plombier professionnel avec 10 ans d\'expérience.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Marie Laurent',
      service: 'Ménage',
      category: 'menage',
      rating: 4.9,
      reviews: 89,
      price: 25,
      location: 'Lyon 2e',
      bio: 'Professionnelle du ménage depuis 8 ans.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Sophie Martin',
      service: 'Garde d\'enfants',
      category: 'garde-enfants',
      rating: 4.7,
      reviews: 67,
      price: 15,
      location: 'Marseille 8e',
      bio: 'Éducatrice de jeunes enfants diplômée.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || provider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} w-4 h-4`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="pt-20 pb-8 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trouvez le service qu'il vous faut
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Des professionnels qualifiés à votre service
            </p>
            
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un service ou un prestataire..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 text-lg rounded-xl border-0 focus:ring-4 focus:ring-red-300 focus:outline-none"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Catégories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Catégories populaires</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`relative h-40 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id ? 'ring-2 ring-red-500' : ''}`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} flex flex-col items-center justify-center p-4 text-center`}>
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <h3 className="font-semibold">{category.name}</h3>
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
          </div>
          
          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <div 
                  key={provider.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${provider.image})`
                    }}
                  >
                    <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
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
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      {provider.bio}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <FaMapMarkerAlt className="mr-2 text-red-500" />
                      <span>{provider.location}</span>
                    </div>
                    
                    <Link 
                      to={`/prestataire/${provider.id}`}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center block"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('');
                  setSearchTerm('');
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services; 