import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import dark from '../../assets/dark.png';
import '../../index.css';

const Menu = () => {
  return (
    <div className="absolute top-28 right-0 bg-white border border-gray-200 rounded-md shadow-lg">
      <ul className="py-2 px-4">
        <li className="mb-2"><a href="/" className="block text-gray-700 hover:text-gray-900">Inicio</a></li>
        <li className="mb-2"><a href="/portafolio" className="block text-gray-700 hover:text-gray-900">Portafolio</a></li>
        <li><a href="/contacto" className="block text-gray-700 hover:text-gray-900">Contacto</a></li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú cuando la pantalla cambia a un tamaño más grande
  const closeMenuOnLargeScreen = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  // Efecto para cerrar el menú cuando la pantalla cambia a un tamaño más grande
  useEffect(() => {
    window.addEventListener('resize', closeMenuOnLargeScreen);
    return () => {
      window.removeEventListener('resize', closeMenuOnLargeScreen);
    };
  }, []);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-32 w-auto" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-sm font-semibold leading-6 text-turquesa">Inicio</a>
            <a href="/portafolio" className="text-sm font-semibold leading-6 text-turquesa">Portafolio</a>
            <a href="/contacto" className="text-sm font-semibold leading-6 text-turquesa">Contacto</a>
          </div>
          <div className="hidden flex-wrap lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-11 w-auto" src={dark} alt="Dark Mode" />
            </a>
          </div>
        </nav>
      </header>
      {menuOpen && <Menu />}
    </div>
  );
};

export default Header;
