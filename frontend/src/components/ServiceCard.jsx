import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const ServiceCard = ({ 
  title, 
  description, 
  category = 'Service', 
  rating = 4.5, 
  price = '25', 
  imageUrl,
  isPopular = false,
  discount = 0
}) => {
  // Images par catégorie avec des images plus modernes et professionnelles
  const categoryImages = {
    'Plomberie': 'https://images.unsplash.com/photo-1600607687939-ce428662c566?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Ménage': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Garde d\'enfants': 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Cours particuliers': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Jardinage': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Bricolage': 'https://images.unsplash.com/photo-1581093057306-e7023d4bcab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Déménagement': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'Garde d\'animaux': 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  };

  // Utiliser l'image spécifiée ou une image par défaut basée sur la catégorie
  const serviceImage = imageUrl || categoryImages[category] || 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  
  // Calculer le prix après réduction si applicable
  const originalPrice = parseFloat(price);
  const finalPrice = discount > 0 ? (originalPrice * (1 - discount / 100)).toFixed(2) : originalPrice;
  
  // Générer les étoiles de notation
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 w-4 h-4" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 w-4 h-4" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 w-4 h-4" />);
      }
    }
    
    return stars;
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden transform hover:-translate-y-1 animate-fadeIn"
      style={{
        animation: 'fadeIn 0.5s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {/* Badge Populaire */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Populaire
          </span>
        </div>
      )}
      
      {/* Badge Réduction */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            -{discount}%
          </span>
        </div>
      )}
      
      {/* Image du service */}
      <div className="h-48 overflow-hidden bg-gray-100 relative">
        <img 
          src={serviceImage} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Contenu de la carte */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Catégorie et note */}
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
            {category}
          </span>
          <div className="flex items-center">
            <div className="flex items-center">
              {renderStars()}
            </div>
            <span className="text-gray-500 text-xs ml-1">({rating.toFixed(1)})</span>
          </div>
        </div>
        
        {/* Titre et description */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors" title={title}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Prix et bouton */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              {discount > 0 ? (
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-primary-600">{finalPrice}€</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">{price}€</span>
                  <span className="ml-2 text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                    Économisez {discount}%
                  </span>
                </div>
              ) : (
                <span className="text-xl font-bold text-primary-600">{price}€</span>
              )}
              <span className="text-gray-500 text-sm block">par heure</span>
            </div>
            <Link 
              to="/booking" 
              className="relative inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-100"
            >
              <span className="relative z-10">Réserver</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          {/* Badge de disponibilité */}
          <div className="mt-3 flex items-center text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Disponible maintenant
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
