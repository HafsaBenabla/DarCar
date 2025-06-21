import { Link } from 'react-router-dom';
import { 
  FaArrowRight,
  FaWrench,
  FaBroom,
  FaBaby,
  FaChalkboardTeacher,
  FaSeedling,
  FaTools,
  FaTruck,
  FaPaw
} from 'react-icons/fa';

const ServiceCard = ({ 
  title, 
  description, 
  category = 'Service', 
  imageUrl,
}) => {
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

  const serviceIcons = {
    'Plomberie': FaWrench,
    'Ménage': FaBroom,
    'Garde d\'enfants': FaBaby,
    'Cours particuliers': FaChalkboardTeacher,
    'Jardinage': FaSeedling,
    'Bricolage': FaTools,
    'Déménagement': FaTruck,
    'Garde d\'animaux': FaPaw,
    'Default': FaTools
  };

  const Icon = serviceIcons[category] || serviceIcons['Default'];
  const serviceImage = imageUrl || categoryImages[category] || 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';

  return (
    <div className="bg-white rounded-t-xl rounded-bl-xl rounded-br-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full animate-fade-in-up">
      <div className="relative">
        <div className="h-52">
            <img 
              src={serviceImage} 
              alt={title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
        </div>
        <div className="absolute -bottom-8 left-6 w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg border-4 border-white">
          <Icon className="w-7 h-7" />
        </div>
      </div>
      
      <div className="p-6 pt-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm flex-1 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-800 transition-colors group"
            >
              <span>En savoir plus</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
