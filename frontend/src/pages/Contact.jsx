import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaHeadset, 
  FaComments, 
  FaShieldAlt, 
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaHandshake
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const trustFactors = [
    { icon: FaUsers, text: "10,000+ clients satisfaits", color: "text-red-600" },
    { icon: FaStar, text: "4.9/5 étoiles", color: "text-red-600" },
    { icon: FaShieldAlt, text: "Garantie 100%", color: "text-red-600" },
    { icon: FaHandshake, text: "Service premium", color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar lightOnTop={true} />
      
      <main className="flex-grow">
        {/* Hero Section élégant - Plein écran */}
        <section className="relative h-screen bg-gradient-to-br from-gray-50 via-red-50 to-white overflow-hidden flex items-center justify-center">
          {/* Motif de fond subtil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Accent décoratif */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-50 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-40"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed">
                Notre équipe d'experts est là pour vous accompagner
              </p>
              
              {/* Facteurs de confiance élégants */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {trustFactors.map((factor, index) => (
                  <div key={index} className="bg-white bg-opacity-80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <factor.icon className={`text-2xl mx-auto mb-2 ${factor.color}`} />
                    <span className="text-sm font-medium text-gray-700">{factor.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Badge de garantie élégant */}
              <div className="inline-flex items-center space-x-3 bg-white bg-opacity-90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-gray-100">
                <FaShieldAlt className="text-2xl text-red-500" />
                <span className="text-lg font-semibold text-gray-800">Réponse garantie sous 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Méthodes de contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comment nous contacter ?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choisissez la méthode qui vous convient le mieux pour nous joindre
              </p>
        </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Support Client */}
              <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHeadset className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Support Client</h3>
                <p className="text-gray-600 mb-4">Notre équipe est disponible 24h/24 pour vous accompagner</p>
                <div className="text-lg font-semibold text-red-600">+212 5XX-XXXXXX</div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Disponible maintenant</span>
                </div>
              </div>

              {/* Chat en Direct */}
              <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaComments className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Chat en Direct</h3>
                <p className="text-gray-600 mb-4">Discutez avec nos experts en temps réel</p>
                <div className="text-lg font-semibold text-red-600">Chat disponible</div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>En ligne</span>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Envoyez-nous un message détaillé</p>
                <div className="text-lg font-semibold text-red-600">contact@darcar.ma</div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FaClock className="text-red-500 mr-2" />
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section principale avec formulaire */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Informations de contact avec image */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nos Coordonnées</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.
                    </p>
                  </div>

                  {/* Image décorative */}
                  <div className="relative mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop" 
                      alt="Équipe DarCar" 
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-20 rounded-2xl"></div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="bg-red-100 text-red-600 p-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <FaMapMarkerAlt size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Notre Adresse</h3>
                        <p className="text-gray-600 text-lg">123 Avenue Mohammed V<br/>20000 Casablanca, Maroc</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="bg-red-100 text-red-600 p-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <FaPhoneAlt size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Téléphone</h3>
                        <p className="text-gray-600 text-lg">+212 5 22 34 56 78</p>
                        <p className="text-sm text-gray-500">Lun-Ven: 9h-18h | Sam: 9h-12h</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="bg-red-100 text-red-600 p-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                        <FaEnvelope size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-red-600 text-lg hover:underline cursor-pointer">contact@darcar.ma</p>
                        <p className="text-sm text-gray-500">Réponse sous 24h</p>
                      </div>
                    </div>
                  </div>

                  {/* Horaires dans un encadré stylé */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaClock className="text-red-500" /> 
                      Horaires d'ouverture
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span>Lundi - Vendredi</span>
                        <span className="font-semibold text-red-600">9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Samedi</span>
                        <span className="font-semibold text-red-600">9h00 - 12h00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Dimanche</span>
                        <span className="font-semibold text-gray-500">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Formulaire de contact */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Envoyez-nous un message</h2>
                    <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais</p>
                  </div>
                  
              <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300"
                          placeholder="Votre nom"
                  />
                </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300"
                          placeholder="votre@email.com"
                  />
                      </div>
                </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Sujet
                      </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300"
                        placeholder="Sujet de votre message"
                  />
                </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 resize-none transition-all duration-300"
                        placeholder="Décrivez votre demande..."
                      />
                </div>

                <button
                  type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                      Envoyer le message
                </button>
              </form>
            </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
