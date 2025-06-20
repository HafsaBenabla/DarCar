import { useState } from 'react';
import Navbar from '../components/Navbar';
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
    // Ici, vous pourriez ajouter la logique pour envoyer le formulaire
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20 shadow-md">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Contactez-nous</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
              Notre équipe est à votre écoute pour répondre à toutes vos questions ou demandes de service.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 animate-fade-in hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-extrabold text-red-600 mb-6 flex items-center gap-2"><FaEnvelope className="inline-block text-red-500" /> Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 bg-gray-50 transition"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white">
                    Votre nom complet *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 bg-gray-50 transition"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white">
                    Adresse email *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 bg-gray-50 transition"
                    placeholder=" "
                  />
                  <label htmlFor="subject" className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white">
                    Sujet
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 bg-gray-50 transition resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-red-600 peer-focus:bg-white">
                    Message *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-3 px-6 rounded-lg shadow transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 flex flex-col justify-center animate-fade-in hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-extrabold text-red-600 mb-6 flex items-center gap-2"><FaMapMarkerAlt className="inline-block text-red-500" /> Nos coordonnées</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-700">
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                  <span>123 Avenue de la République, Paris</span>
                </li>
                <li className="flex items-center gap-4 text-gray-700">
                  <FaPhoneAlt className="text-red-500 text-xl" />
                  <a href="tel:+33123456789" className="text-red-600 hover:text-red-700">+33 1 23 45 67 89</a>
                </li>
                <li className="flex items-center gap-4 text-gray-700">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <a href="mailto:contact@darcar.com" className="text-red-600 hover:text-red-700">contact@darcar.com</a>
                </li>
                <li className="flex items-center gap-4 text-gray-700">
                  <FaClock className="text-red-500 text-xl" />
                  <span>Lun - Ven : 8h - 19h</span>
                </li>
              </ul>
            </div> {/* Close contact info column */}
          </div> {/* Close grid */}


        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">DarCar</h3>
              <p className="text-gray-400">Votre plateforme de services à domicile</p>
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-red-400 transition">À propos</a>
              <a href="/services" className="hover:text-red-400 transition">Services</a>
              <a href="/contact" className="hover:text-red-400 transition">Contact</a>
              <a href="/privacy" className="hover:text-red-400 transition">Confidentialité</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DarCar. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
