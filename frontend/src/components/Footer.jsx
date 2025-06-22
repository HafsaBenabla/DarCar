import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const legal = [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Conditions d\'utilisation', href: '/terms' },
    { name: 'Politique de remboursement', href: '/refund' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: '123 Avenue Mohammed V, 20000 Casablanca, Maroc' },
    { icon: <FaPhone />, text: '+212 5 22 34 56 78' },
    { icon: <FaEnvelope />, text: 'contact@darcar.ma' },
  ];

  const paymentInfo = [
    { icon: <FaCreditCard />, text: 'Paiement en ligne sécurisé' },
    { icon: <FaShieldAlt />, text: 'Service et satisfaction garantis' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="w-full mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo et description */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-bold mb-4">DarCar</h3>
            <p className="text-gray-400 mb-6">
              La plateforme de référence pour trouver des services à domicile de qualité près de chez vous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Contactez-nous</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sécurité & Paiement */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Sécurité & Paiement</h4>
            <ul className="space-y-4">
              {paymentInfo.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 mt-1">{item.icon}</span>
                      <span className="text-gray-400">{item.text}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DarCar. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center md:text-right">
            <p className="text-xs text-gray-500">
              Conçu avec ❤️ pour vous simplifier la vie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
