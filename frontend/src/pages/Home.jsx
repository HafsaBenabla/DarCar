import React, { useState } from 'react';
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
  FaMapMarkedAlt,
  FaArrowRight
} from 'react-icons/fa';

const whyChooseUsData = [
  {
    number: '01',
    title: 'Expertise Garantie',
    description: 'Nos prestataires sont rigoureusement sélectionnés pour votre tranquillité d\'esprit.'
  },
  {
    number: '02',
    title: 'Qualité Supérieure',
    description: 'Nous nous engageons à fournir un service irréprochable et garantissons votre satisfaction.'
  },
  {
    number: '03',
    title: 'Simplicité & Flexibilité',
    description: 'Réservez en quelques clics et profitez d\'un service disponible 7j/7.'
  }
];

const Home = () => {
  const [services] = useState([
    {
      id: 1,
      title: 'Plomberie professionnelle',
      description: 'Dépannage, installation et entretien de plomberie par des experts certifiés.',
      category: 'Plomberie',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce428662c566?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'Service de ménage complet',
      description: 'Nettoyage approfondi de votre intérieur par des professionnels expérimentés.',
      category: 'Ménage',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Garde d\'enfants à domicile',
      description: 'Garde d\'enfants par des professionnels qualifiés pour le bien-être de vos enfants.',
      category: 'Garde d\'enfants',
      imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Jardinage et entretien',
      description: 'Taille de haies, tonte de pelouse, et aménagement paysager par des jardiniers passionnés.',
      category: 'Jardinage',
      imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Section Services Populaires */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services Populaires</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Découvrez nos services les plus demandés par nos clients satisfaits.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {services.map(service => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  category={service.category}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Voir tous les services
              </button>
            </div>
          </div>
        </section>
        
        {/* Section Pourquoi nous choisir */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir DarCar ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">La qualité de service est notre priorité absolue.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center">
              {whyChooseUsData.map((item, index) => (
                <React.Fragment key={item.number}>
                  <div 
                    className="relative flex-shrink-0 px-4 opacity-0 animate-fade-in-up"
                    style={{ animationFillMode: 'forwards', animationDelay: `${index * 300}ms` }}
                  >
                    <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center p-2 border-2 border-gray-100 shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-gray-200 flex flex-col items-center justify-center px-6 text-center">
                        <h3 className="text-lg font-bold mb-2 text-gray-800 mt-8">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl border-8 border-white z-10">
                        {item.number}
              </div>
                </div>
              </div>
              
                  {index < whyChooseUsData.length - 1 && (
                    <div 
                      className="w-full h-12 md:w-24 md:h-px my-4 md:my-0 opacity-0 animate-fade-in"
                      style={{ animationFillMode: 'forwards', animationDelay: `${index * 300 + 150}ms` }}
                    >
                      <div className="w-full h-full border-l-2 md:border-l-0 md:border-t-2 border-dashed border-gray-300"></div>
                </div>
                  )}
                </React.Fragment>
              ))}
              <div 
                className="w-full h-12 md:w-24 md:h-px my-4 md:my-0 opacity-0 animate-fade-in"
                style={{ animationFillMode: 'forwards', animationDelay: `${(whyChooseUsData.length - 1) * 300 + 150}ms` }}
              >
                <div className="w-full h-full border-l-2 md:border-l-0 md:border-t-2 border-dashed border-gray-300 relative">
                  <FaArrowRight className="absolute top-full left-1/2 -translate-x-1/2 md:top-1/2 md:left-full text-gray-400 -translate-y-1/2 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Comment ça marche */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Réservez un service en seulement 3 étapes faciles</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Carte 1 - Choisissez un service */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Face avant */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                        1
                      </div>
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
                        <FaSearch className="w-10 h-10 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Choisissez un service</h3>
                      <p className="text-gray-600">Parcourez nos services et sélectionnez celui qui correspond à vos besoins.</p>
                      <div className="mt-4 text-primary-600 text-sm font-medium">
                        Survolez pour plus d'infos →
                      </div>
                    </div>
                  </div>
                  
                  {/* Face arrière */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative text-center p-6 bg-primary-600 text-white rounded-xl shadow-lg h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  1
                </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Détails de la sélection</h3>
                      <ul className="text-left text-sm space-y-2 text-primary-100">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Plus de 50 services disponibles</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Filtres par catégorie et localisation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Avis et notes des prestataires</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Prix transparents et sans surprise</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carte 2 - Planifiez un rendez-vous */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Face avant */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                        2
                      </div>
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
                        <FaRegClock className="w-10 h-10 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Planifiez un rendez-vous</h3>
                      <p className="text-gray-600">Choisissez une date et une heure qui vous conviennent.</p>
                      <div className="mt-4 text-primary-600 text-sm font-medium">
                        Survolez pour plus d'infos →
                      </div>
                    </div>
                  </div>
                  
                  {/* Face arrière */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative text-center p-6 bg-primary-600 text-white rounded-xl shadow-lg h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  2
                </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Options de planification</h3>
                      <ul className="text-left text-sm space-y-2 text-primary-100">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Calendrier interactif en temps réel</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Disponibilité 7j/7, 24h/24</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Réservation en quelques clics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Confirmation immédiate par email/SMS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carte 3 - Profitez du service */}
              <div className="group perspective-1000">
                <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Face avant */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                        3
                      </div>
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-6">
                        <FaSmile className="w-10 h-10 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Profitez du service</h3>
                      <p className="text-gray-600">Un professionnel qualifié se charge de tout.</p>
                      <div className="mt-4 text-primary-600 text-sm font-medium">
                        Survolez pour plus d'infos →
                      </div>
                    </div>
                  </div>
                  
                  {/* Face arrière */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="relative text-center p-6 bg-primary-600 text-white rounded-xl shadow-lg h-full flex flex-col justify-center">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                  3
                </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">Garanties du service</h3>
                      <ul className="text-left text-sm space-y-2 text-primary-100">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Prestataires vérifiés et assurés</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Suivi en temps réel de l'intervention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Satisfaction garantie ou remboursé</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Support client disponible 24h/24</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Témoignages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Découvrez les avis de nos clients satisfaits.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Leila Mansouri", role: "Particulier", content: "Service de ménage impeccable ! La personne était ponctuelle et très professionnelle. Je recommande vivement.", rating: 5 },
                { name: "Omar Alami", role: "Entrepreneur", content: "J'ai fait appel à un plombier via DarCar et j'ai été agréablement surpris par la qualité du service.", rating: 5 },
                { name: "Nadia Berrada", role: "Mère de famille", content: "La nounou que j'ai trouvée est géniale avec mes enfants. Je suis ravie du service proposé par DarCar.", rating: 4 }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <FaRegStar key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center text-primary-700 font-bold mr-4 text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à simplifier votre quotidien ?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Rejoignez des milliers de clients satisfaits et profitez de services de qualité à domicile.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Réserver un service
              </button>
              <button className="px-8 py-4 border-2 border-primary-100 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300 font-medium text-lg">
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
