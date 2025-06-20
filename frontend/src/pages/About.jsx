import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaHandshake, FaRocket, FaStar } from 'react-icons/fa';

// Exemple de données pour les membres de l'équipe
const teamMembers = [
  {
    name: 'Jean Dupont',
    role: 'Fondateur & CEO',
    bio: 'Passionné par l\'innovation au service des gens.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Marie Martin',
    role: 'Responsable Qualité',
    bio: 'S\'assure que chaque service est une expérience 5 étoiles.',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'Thomas Leroy',
    role: 'Responsable Partenariats',
    bio: 'Tisse des liens forts avec nos incroyables prestataires.',
    image: 'https://randomuser.me/api/portraits/men/76.jpg'
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div 
          className="relative bg-cover bg-center text-white h-screen flex items-center justify-center" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">À propos de DarCar</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
              Votre partenaire de confiance pour tous les services à domicile.
            </p>
          </div>
        </div>

        {/* Notre Histoire */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-16 items-center">
              <div className="md:col-span-2 animate-fade-in-right">
                <img 
                  src="https://i.pinimg.com/736x/9c/f7/22/9cf722fcf2abadce8d64fb08b82d321b.jpg" 
                  alt="Service à domicile de qualité" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
              <div className="md:col-span-3 animate-fade-in-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Fondée en 2023, DarCar est née d'une idée simple : simplifier la recherche de professionnels fiables pour les services à domicile. Fini le stress et l'incertitude.
                  </p>
                  <p>
                    Notre mission est de connecter les gens avec des experts passionnés et compétents pour tous les besoins du quotidien, du dépannage urgent au projet planifié.
                  </p>
                  <p>
                    Nous sommes une équipe dévouée à créer une expérience exceptionnelle, tant pour nos clients que pour les prestataires qui nous rejoignent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nos Valeurs Fondamentales</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:-translate-y-2">
                <FaHandshake className="text-5xl text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Confiance</h3>
                <p className="text-gray-600">Chaque prestataire est rigoureusement vérifié pour garantir sécurité et qualité.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:-translate-y-2">
                <FaRocket className="text-5xl text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Efficacité</h3>
                <p className="text-gray-600">Trouvez une aide rapide et compétente. Votre temps est précieux, nous le respectons.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform transform hover:-translate-y-2">
                <FaStar className="text-5xl text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">Votre satisfaction est notre moteur. Nous visons toujours le meilleur service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Rencontrez Notre Équipe</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center bg-gray-50 p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-white">
                  <img 
                    src={member.image} 
                    alt={`Portrait de ${member.name}`} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à simplifier votre quotidien ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et trouvez le service parfait dès aujourd'hui.
            </p>
            <a 
              href="/services" 
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Découvrir nos services
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
