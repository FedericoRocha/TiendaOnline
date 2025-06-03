import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Inicio', href: '#' },
    { name: 'Tienda', href: '#' },
    { name: 'Colecciones', href: '#' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#' },
    { name: 'Términos y condiciones', href: '#' },
    { name: 'Política de privacidad', href: '#' },
    { name: 'Envíos y devoluciones', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebookF,
    },
    {
      name: 'TikTok',
      href: '#',
      icon: FaTiktok,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Underground Streetwear. Todos los derechos reservados.
        </p>
        <div className="mt-2 text-center text-sm text-gray-500">
          <p>Hecho con ❤️ para los amantes de la moda urbana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
