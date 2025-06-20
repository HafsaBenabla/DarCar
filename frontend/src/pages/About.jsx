import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de DarCar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous les services à domicile
            </p>
          </div>
        </div>

        {/* Notre Histoire */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Fondée en 2023, DarCar est née d'un constat simple : trouver un professionnel fiable et compétent pour des services à domicile peut s'avérer être un véritable parcours du combattant.
                </p>
                <p>
                  Notre mission est de simplifier la vie des particuliers en leur permettant de trouver facilement des prestataires de confiance pour tous leurs besoins quotidiens, du plombier à la nounou en passant par les cours particuliers.
                </p>
                <p>
                  Aujourd'hui, DarCar c'est une équipe passionnée qui s'engage à offrir la meilleure expérience possible à la fois aux clients et aux prestataires de services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-3">Confiance</h3>
                <p className="text-gray-600">Tous nos prestataires sont soigneusement sélectionnés et vérifiés pour vous garantir des services de qualité.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Rapidité</h3>
                <p className="text-gray-600">Trouvez un professionnel disponible rapidement, souvent en moins d'une heure pour les urgences.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">♥</div>
                <h3 className="text-xl font-semibold mb-3">Satisfaction</h3>
                <p className="text-gray-600">Votre satisfaction est notre priorité absolue. Nous sommes là pour vous accompagner à chaque étape.</p>
              </div>
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Jean Dupont', role: 'Fondateur & CEO', bio: '15 ans d\'expérience dans les services à la personne' },
                { name: 'Marie Martin', role: 'Responsable Qualité', bio: 'Spécialiste de la relation client et de la satisfaction' },
                { name: 'Thomas Leroy', role: 'Responsable Partenariats', bio: 'En charge des relations avec nos prestataires' },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center text-4xl text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à essayer nos services ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits qui nous font confiance au quotidien.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/register" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300"
              >
                S'inscrire maintenant
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
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

export default About;
