import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Nueva sección de atribución */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            Sitio web hecho en: <a href="https://www.nerd.lat" target="_blank" rel="noopener noreferrer" className="text-[#95BF92] hover:underline">nerd.lat</a>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Nerd Assistant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Planes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Precios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Iniciar sesión</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Productividad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Análisis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Atención al cliente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Contenido</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Guías</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Comunidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Equipo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Noticias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#95BF92] transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Logo className="w-8 h-8 mr-2" />
              <p className="text-gray-400">© 2025 Nerd</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <p className="text-lg font-medium mb-4 md:mb-0 md:mr-4">¿Listo para transformar tu empresa?</p>
              <button className="bg-[#95BF92] text-black px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                Comenzar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// DONE