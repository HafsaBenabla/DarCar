import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-[2px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
      ></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-white bg-opacity-10"></div>
      {/* Fond avec dégradé et motif */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-10"></div>
      
      {/* Formes décoratives */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-100 opacity-40"></div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-secondary-100 opacity-30"></div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Trouvez le service</span>
            <span className="block text-primary-600">qu'il vous faut</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 md:mt-6 md:text-xl">
            Des professionnels qualifiés pour tous vos besoins à domicile. 
            <span className="block sm:inline">Simple, rapide et 100% fiable.</span>
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Trouver un service
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
            >
              Comment ça marche ?
            </Link>
          </div>
        </div>
      </div>

      {/* Barre de recherche flottante */}
      <div className="relative max-w-4xl mx-auto -mb-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="service" className="sr-only">Service</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="service"
                  id="service"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 pr-3 py-4 border-gray-300 rounded-lg text-base"
                  placeholder="Plomberie, ménage, bricolage..."
                />
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <label htmlFor="location" className="sr-only">Localisation</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <select
                  id="location"
                  name="location"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 pr-10 py-4 text-base border-gray-300 rounded-lg"
                >
                  <option>Partout en France</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                  <option>Marseille</option>
                  <option>Toulouse</option>
                  <option>Bordeaux</option>
                </select>
              </div>
            </div>
            
            <div className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 transform hover:scale-105"
              >
                <span>Rechercher</span>
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <svg className="h-4 w-4 text-primary-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Service garanti
            </span>
            <span className="inline-flex items-center">
              <svg className="h-4 w-4 text-primary-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Paiement sécurisé
            </span>
            <span className="inline-flex items-center">
              <svg className="h-4 w-4 text-primary-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Avis vérifiés
            </span>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default Hero;
