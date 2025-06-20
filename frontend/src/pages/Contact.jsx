import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar lightOnTop={true} />
      
      <main className="flex-grow pt-20">
        {/* En-tête */}
        <div className="text-center py-12 bg-white shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contactez-nous</h1>
          <p className="text-lg text-gray-600 mt-2">Notre équipe est à votre écoute.</p>
        </div>

        {/* Section principale */}
        <div 
          className="relative py-20 bg-cover bg-center"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1587560699334-cc4262401233?q=80&w=2070&auto=format&fit=crop')"}}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
              
              {/* Informations de contact */}
              <div className="md:w-2/5">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-red-100 text-red-600 p-3 rounded-full mt-1 transition-transform transform group-hover:scale-110">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Adresse</h3>
                      <p className="text-gray-600">123 Avenue Mohammed V<br/>Marrakech, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-red-100 text-red-600 p-3 rounded-full mt-1 transition-transform transform group-hover:scale-110">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Téléphone</h3>
                      <p className="text-gray-600">+212 5XX-XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-red-100 text-red-600 p-3 rounded-full mt-1 transition-transform transform group-hover:scale-110">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                      <p className="text-red-600 hover:underline">contact@darcar.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2"><FaClock className="text-red-500" /> Horaires</h3>
                  <div className="flex justify-between text-gray-600">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between text-gray-600 mt-1">
                    <span>Samedi</span>
                    <span>9h00 - 12h00</span>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200 focus:shadow-lg"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200 focus:shadow-lg"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200 focus:shadow-lg"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none transition-shadow duration-200 focus:shadow-lg"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
