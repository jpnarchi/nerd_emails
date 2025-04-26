import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Función para cambiar de página o navegar a URL externa
  const navigateTo = (destination) => {
    if (destination === 'nerd.lat') {
      window.location.href = 'https://www.nerd.lat';
    } else {
      // Simulamos la navegación cambiando el hash de la URL
      window.location.hash = destination;
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => navigateTo('nerd.lat')}> {/* Enlace a nerd.lat */}
          <Logo className="w-10 h-10 mr-3" />
          <img src="/nerd.svg" alt="Nerd" className="h-8" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="hover:text-[#95BF92] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateTo(''); // Navegar a la página de inicio (hash vacío)
            }}
          >
            Inicio
          </a>
          <a 
            href="#solutions" 
            className="hover:text-[#95BF92] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('solutions');
            }}
          >
            Soluciones
          </a>
          <a 
            href="#resources" 
            className="hover:text-[#95BF92] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('resources');
            }}
          >
            Recursos
          </a>
          <a 
            href="#team" 
            className="hover:text-[#95BF92] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('team');
            }}
          >
            Equipo
          </a>
          <a 
            href="#blog" 
            className="hover:text-[#95BF92] transition-colors"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('blog');
            }}
          >
            Blog
          </a>
          <button 
            className="bg-[#95BF92] text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            onClick={() => navigateTo('nerd.lat')} // Botón "Conoce Nerd"
          >
            Conoce Nerd
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black absolute left-0 right-0 px-6 py-4 mt-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="hover:text-[#95BF92] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateTo(''); // Navegar a la página de inicio (hash vacío)
              }}
            >
              Inicio
            </a>
            <a 
              href="#solutions" 
              className="hover:text-[#95BF92] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('solutions');
              }}
            >
              Soluciones
            </a>
            <a 
              href="#resources" 
              className="hover:text-[#95BF92] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('resources');
              }}
            >
              Recursos
            </a>
            <a 
              href="#team" 
              className="hover:text-[#95BF92] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('team');
              }}
            >
              Equipo
            </a>
            <a 
              href="#blog" 
              className="hover:text-[#95BF92] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('blog');
              }}
            >
              Blog
            </a>
            <button 
              className="bg-[#95BF92] text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all w-full"
              onClick={() => navigateTo('nerd.lat')} // Botón "Conoce Nerd" en menú móvil
            >
              Conoce Nerd
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;