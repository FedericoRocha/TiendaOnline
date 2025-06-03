import { PaintBrushIcon, LightBulbIcon, HeartIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Arte Urbano',
    description:
      'Nuestros diseños están inspirados en el arte callejero y la cultura urbana, llevando el espíritu de la calle a cada prenda.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Innovación',
    description:
      'Cada colección es el resultado de la innovación en diseño y materiales, ofreciendo prendas únicas y de alta calidad.',
    icon: LightBulbIcon,
  },
  {
    name: 'Pasión',
    description:
      'Amamos lo que hacemos y eso se refleja en cada detalle. Cada prenda está hecha con pasión y dedicación.',
    icon: HeartIcon,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            SOBRE NOSOTROS
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Underground Streetwear nace de la fusión entre la moda urbana y el arte callejero, 
            creando piezas únicas para quienes buscan expresar su identidad sin límites.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-pink-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-black text-white rounded-xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-50"></div>
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    ÚNETE A LA REVOLUCIÓN URBANA
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-pink-100">
                    Suscríbete a nuestro newsletter y sé el primero en conocer nuestros nuevos lanzamientos, ofertas exclusivas y eventos especiales.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                      placeholder="Tu correo electrónico"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-white"
                      >
                        Suscribirse
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm text-pink-100">
                    Nos importa la protección de tus datos. Lee nuestra{' '}
                    <a href="#" className="text-white font-medium underline">
                      Política de Privacidad
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
