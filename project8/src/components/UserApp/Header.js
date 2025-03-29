import React, { useState } from 'react';

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', view: 'home' },
    { name: 'Viajes', view: 'location' },
    { name: 'Perfil', view: 'profile' },
    { name: 'Historial', view: 'history' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://via.placeholder.com/50" 
            alt="MotoRide Logo" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <h1 className="text-2xl font-bold">MotoRide</h1>
        </div>
        
        {/* Menú Hamburguesa */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Menú de Navegación */}
        <nav className={`
          fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:bg-transparent md:w-auto
        `}>
          <ul className="flex flex-col md:flex-row items-center h-full p-8 md:p-0 space-y-6 md:space-y-0 md:space-x-6">
            {menuItems.map((item) => (
              <li 
                key={item.view}
                className="hover:text-blue-500 transition"
                onClick={() => {
                  onNavigate(item.view);
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;