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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Objet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez-nous votre demande..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
              <p className="text-gray-600 mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions. N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Services<br />75000 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-blue-600">+33 1 23 45 67 89</a><br />
                      <span className="text-sm">Lun-Ven: 9h-18h</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@darcar.com" className="hover:text-blue-600">contact@darcar.com</a><br />
                      <span className="text-sm">Réponse sous 24h</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 9h - 13h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Besoin d'aide immédiate ?</h3>
                <p className="text-gray-600 mb-4">
                  Pour les urgences, nos conseillers sont disponibles 24h/24 au :
                </p>
                <a 
                  href="tel:+33612345678" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                >
                  <FaPhoneAlt className="inline mr-2" />
                  +33 6 12 34 56 78
                </a>
              </div>
            </div>
          </div>

          {/* Carte (espace réservé) */}
          <div className="mt-16 bg-gray-200 rounded-xl overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p>Carte d'emplacement (intégrez Google Maps ici)</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">DarCar</h3>
              <p className="text-gray-400">Votre plateforme de services à domicile</p>
            </div>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-blue-400">À propos</a>
              <a href="/services" className="hover:text-blue-400">Services</a>
              <a href="/contact" className="hover:text-blue-400">Contact</a>
              <a href="/privacy" className="hover:text-blue-400">Confidentialité</a>
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
