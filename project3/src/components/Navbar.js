import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="fixed top-0 w-full bg-black text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">UrbanFlow</div>
        <div className="space-x-4">
          <button onClick={() => setCurrentPage('home')} className="hover:text-gray-300">Inicio</button>
          <button onClick={() => setCurrentPage('catalog')} className="hover:text-gray-300">Catálogo</button>
          <button onClick={() => setCurrentPage('man')} className="hover:text-gray-300">Hombre</button>
          <button onClick={() => setCurrentPage('woman')} className="hover:text-gray-300">Mujer</button>
          <button onClick={() => setCurrentPage('accessories')} className="hover:text-gray-300">Accesorios</button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-gray-300">Nosotros</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300">Contacto</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;