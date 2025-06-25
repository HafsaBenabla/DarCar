import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHandshake, FaRocket, FaStar, FaUsers, FaAward, FaHeart, FaCheckCircle, FaLightbulb, FaShieldAlt, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Exemple de données pour les membres de l'équipe
const teamMembers = [
  {
    name: 'Ahmed Benali',
    role: 'Fondateur & CEO',
    bio: 'Passionné par l\'innovation au service des gens.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    expertise: ['Stratégie', 'Innovation', 'Leadership']
  },
  {
    name: 'Fatima Zahra',
    role: 'Responsable Qualité',
    bio: 'S\'assure que chaque service est une expérience 5 étoiles.',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    expertise: ['Qualité', 'Processus', 'Excellence']
  },
  {
    name: 'Karim El Amrani',
    role: 'Responsable Partenariats',
    bio: 'Tisse des liens forts avec nos incroyables prestataires.',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    expertise: ['Partenariats', 'Réseau', 'Relations']
  },
];

// Statistiques impressionnantes
const stats = [
  { number: '10,000+', label: 'Clients satisfaits', icon: FaUsers },
  { number: '500+', label: 'Prestataires certifiés', icon: FaAward },
  { number: '24h', label: 'Temps de réponse', icon: FaClock },
  { number: '98%', label: 'Taux de satisfaction', icon: FaHeart }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section avec phrase développée */}
        <div 
          className="relative bg-cover bg-center text-white h-screen flex items-center justify-center overflow-hidden" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')"}}
        >
          {/* Overlay animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-red-900/30"></div>
          
          {/* Éléments décoratifs animés */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 opacity-20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-400 opacity-15 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-down">
              À propos de <span className="text-red-400">DarCar</span>
            </h1>
            
            {/* Phrase développée avec animations */}
            <div className="max-w-5xl mx-auto space-y-4 animate-fade-in-up">
              <p className="text-2xl md:text-3xl font-light mb-4">
              Votre partenaire de confiance pour tous les services à domicile
            </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl opacity-90">
                <span className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in-left" style={{animationDelay: '0.3s'}}>
                  🔧 Dépannage rapide
                </span>
                <span className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in-left" style={{animationDelay: '0.6s'}}>
                  🏠 Services à domicile
                </span>
                <span className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-in-left" style={{animationDelay: '0.9s'}}>
                  ⭐ Qualité garantie
                </span>
              </div>
              <p className="text-lg md:text-xl mt-6 opacity-80 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                Nous connectons les familles avec des professionnels qualifiés pour transformer votre quotidien
              </p>
            </div>
          </div>
        </div>

        {/* Section Statistiques avec animations */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-110 transition-all duration-500 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <stat.icon className="text-4xl mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-red-200 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Histoire avec animations améliorées */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-5 gap-16 items-center">
              <div className="md:col-span-2 group">
                <div className="relative animate-fade-in-right">
                  <img 
                    src="https://i.pinimg.com/736x/9c/f7/22/9cf722fcf2abadce8d64fb08b82d321b.jpg" 
                    alt="Service à domicile de qualité" 
                    className="rounded-2xl shadow-xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="md:col-span-3 animate-fade-in-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-red-500 text-white p-2 rounded-lg mr-4">📖</span>
                  Notre Histoire
                </h2>
                <div className="space-y-6 text-gray-600 text-lg">
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-gray-800 mb-2">🎯 Notre Mission</p>
                    <p>
                      Fondée en 2023, DarCar est née d'une idée simple : simplifier la recherche de professionnels fiables pour les services à domicile. Fini le stress et l'incertitude.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaHandshake className="text-red-500 mr-2 text-2xl" />
                      Notre Engagement
                </p>
                <p>
                      Notre mission est de connecter les gens avec des experts passionnés et compétents pour tous les besoins du quotidien, du dépannage urgent au projet planifié.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
                    <p className="font-semibold text-gray-800 mb-2 flex items-center">
                      <FaStar className="text-red-500 mr-2 text-2xl" />
                      Notre Promesse
                </p>
                <p>
                      Nous sommes une équipe dévouée à créer une expérience exceptionnelle, tant pour nos clients que pour les prestataires qui nous rejoignent.
                </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs avec animations interactives */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-down">
              Nos Valeurs Fondamentales
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                  <FaHandshake className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Confiance</h3>
                <p className="text-gray-600">Chaque prestataire est rigoureusement vérifié pour garantir sécurité et qualité.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <FaCheckCircle className="text-red-500" />
                  <FaShieldAlt className="text-red-400" />
                  <FaAward className="text-red-600" />
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                  <FaRocket className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Efficacité</h3>
                <p className="text-gray-600">Trouvez une aide rapide et compétente. Votre temps est précieux, nous le respectons.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <FaClock className="text-red-500" />
                  <FaLightbulb className="text-red-400" />
                  <FaRocket className="text-red-600" />
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                  <FaStar className="text-3xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Excellence</h3>
                <p className="text-gray-600">Votre satisfaction est notre moteur. Nous visons toujours le meilleur service.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <FaStar className="text-red-500" />
                  <FaHeart className="text-red-400" />
                  <FaAward className="text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* L'équipe avec animations améliorées */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-down">
              Rencontrez Notre Équipe
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-50 hover:to-white group animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={`Portrait de ${member.name}`} 
                      className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {member.role}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-red-200 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA avec animations */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down">
              Prêt à simplifier votre quotidien ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Rejoignez des milliers de clients satisfaits et trouvez le service parfait dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a 
                href="/services" 
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos services
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300 transform hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
