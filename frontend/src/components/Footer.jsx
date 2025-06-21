import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Plomberie', href: '/services/plomberie' },
    { name: 'Ménage', href: '/services/menage' },
    { name: 'Garde d\'enfants', href: '/services/garde-enfants' },
    { name: 'Cours particuliers', href: '/services/cours' },
    { name: 'Jardinage', href: '/services/jardinage' },
    { name: 'Bricolage', href: '/services/bricolage' },
  ];

  const company = [
    { name: 'À propos', href: '/about' },
    { name: 'Comment ça marche', href: '/how-it-works' },
    { name: 'Témoignages', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Presse', href: '/press' },
  ];

  const legal = [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Conditions d\'utilisation', href: '/terms' },
    { name: 'Politique de remboursement', href: '/refund' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-primary-600" />, text: '123 Avenue Mohammed V, 20000 Casablanca, Maroc' },
    { icon: <FaPhone className="text-primary-600" />, text: '+212 5 22 34 56 78' },
    { icon: <FaEnvelope className="text-primary-600" />, text: 'contact@darcar.ma' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
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


          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
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
