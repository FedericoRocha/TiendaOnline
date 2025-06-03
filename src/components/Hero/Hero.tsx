import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            VESTITE CON <span className="text-pink-500">ACTITUD</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Descubre nuestra colección exclusiva de ropa urbana diseñada para aquellos que se atreven a ser diferentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#featured"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-pink-500 hover:bg-pink-600 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
            >
              Ver colección
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
            >
              Saber más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
