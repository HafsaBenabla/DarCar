import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { 
  FaWrench, 
  FaBroom, 
  FaBaby, 
  FaChalkboardTeacher, 
  FaTools, 
  FaCar, 
  FaPaw, 
  FaPaintRoller, 
  FaStar, 
  FaClock, 
  FaShieldAlt, 
  FaSmile, 
  FaSearch, 
  FaRegStar, 
  FaStarHalfAlt, 
  FaMapMarkerAlt, 
  FaRegClock, 
  FaRegUser, 
  FaRegHeart, 
  FaHeart, 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaChevronUp, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkedAlt 
} from 'react-icons/fa';

const Home = () => {
  const [services] = useState([
    {
      id: 1,
      title: 'Plomberie professionnelle',
      description: 'Dépannage, installation et entretien de plomberie par des experts certifiés. Fuites, robinets, chauffe-eau et plus encore.',
      category: 'Plomberie',
      rating: 4.8,
      price: '45',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce428662c566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Service de ménage complet',
      description: 'Nettoyage approfondi de votre intérieur par des professionnels expérimentés. Utilisation de produits écologiques.',
      category: 'Ménage',
      rating: 4.7,
      price: '25',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Garde d\'enfants à domicile',
      description: 'Garde d\'enfants par des professionnels qualifiés. Activités éducatives et ludiques pour le bien-être de vos enfants.',
      category: 'Garde d\'enfants',
      rating: 4.9,
      price: '15',
      imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Cours particuliers sur mesure',
      description: 'Soutien scolaire personnalisé dans toutes les matières par des enseignants expérimentés.',
      category: 'Cours particuliers',
      rating: 4.8,
      price: '30',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Jardinage et entretien extérieur',
      description: 'Taille de haies, tonte de pelouse, plantation et aménagement paysager par des jardiniers passionnés.',
      category: 'Jardinage',
      rating: 4.6,
      price: '35',
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Bricolage et aménagement',
      description: 'Travaux de bricolage, montage de meubles et petites réparations par des bricoleurs qualifiés.',
      category: 'Bricolage',
      rating: 4.7,
      price: '40',
      imageUrl: 'https://images.unsplash.com/photo-1581093057306-e7023d4bcab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      title: 'Déménagement professionnel',
      description: 'Service complet de déménagement avec emballage, transport et déballage de vos affaires en toute sécurité.',
      category: 'Déménagement',
      rating: 4.8,
      price: '60',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 8,
      title: 'Garde d\'animaux à domicile',
      description: 'Garde et promenade de vos animaux de compagnie avec amour et professionnalisme.',
      category: 'Garde d\'animaux',
      rating: 4.9,
      price: '20',
      imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Section Services Populaires */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Populaires</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Découvrez nos services les plus demandés par nos clients satisfaits</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  category={service.category}
                  rating={service.rating}
                  price={service.price}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium text-lg">
                Voir tous les services
              </button>
            </div>
          </div>
        </section>
        
        {/* Section Pourquoi nous choisir */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir DarCar ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">La qualité de service est notre priorité absolue</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-red-50">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Professionnels qualifiés</h3>
                <p className="text-gray-600">Tous nos prestataires sont soigneusement sélectionnés et vérifiés</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-red-50">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Service garanti</h3>
                <p className="text-gray-600">Satisfaction garantie ou remboursé selon nos conditions</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-red-50">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Disponible 7j/7</h3>
                <p className="text-gray-600">Service disponible tous les jours, même les week-ends</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-red-50">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSmile className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">+10 000 clients</h3>
                <p className="text-gray-600">Une communauté de clients satisfaits à travers le pays</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Comment ça marche */}
        <section className="py-16 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Réservez un service en seulement 3 étapes faciles</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Choisissez un service</h3>
                <p className="text-gray-600">Parcourez nos services et sélectionnez celui qui correspond à vos besoins</p>
              </div>
              
              <div className="relative text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Planifiez un rendez-vous</h3>
                <p className="text-gray-600">Choisissez une date et une heure qui vous conviennent</p>
              </div>
              
              <div className="relative text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-red-100">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Profitez du service</h3>
                <p className="text-gray-600">Un professionnel qualifié se charge de tout</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Témoignages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Découvrez les avis de nos clients satisfaits</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sophie Martin",
                  role: "Particulier",
                  content: "Service de ménage impeccable ! La personne était ponctuelle et très professionnelle. Je recommande vivement.",
                  rating: 5
                },
                {
                  name: "Thomas Dubois",
                  role: "Entrepreneur",
                  content: "J'ai fait appel à un plombier via DarCar et j'ai été agréablement surpris par la qualité du service et le professionnalisme.",
                  rating: 5
                },
                {
                  name: "Laura Petit",
                  role: "Mère de famille",
                  content: "La nounou que j'ai trouvée est géniale avec mes enfants. Je suis ravie du service proposé par DarCar.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <div className="flex items-center mb-4">
                    <div className="text-red-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-red-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-red-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à simplifier votre quotidien ?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Rejoignez des milliers de clients satisfaits et profitez de services de qualité à domicile</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 transition-colors duration-300 font-medium text-lg">
                Réserver un service
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300 font-medium text-lg">
                En savoir plus
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
