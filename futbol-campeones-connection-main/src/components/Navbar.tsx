
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // No mostrar el Navbar en las rutas de administración
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b3cc060b-9f29-47a4-be9a-7eba29ca10ab.png" 
              alt="SuperCopa Mex Logo" 
              className="h-10 md:h-12"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Inicio</Link>
            <Link to="/resultados" className={`nav-link ${isActive('/resultados') ? 'active' : ''}`}>Resultados</Link>
            <Link to="/patrocinadores" className={`nav-link ${isActive('/patrocinadores') ? 'active' : ''}`}>Patrocinadores</Link>
            <Link to="/torneos-anteriores" className={`nav-link ${isActive('/torneos-anteriores') ? 'active' : ''}`}>Torneos Anteriores</Link>
            <Link to="/galeria" className={`nav-link ${isActive('/galeria') ? 'active' : ''}`}>Galería</Link>
            <Link to="/registro" className="ml-4 btn-accent">REGISTRATE</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-supercopa-navy focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`py-2 px-4 ${isActive('/') ? 'text-supercopa-gold font-medium' : 'text-supercopa-navy'}`}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/resultados" 
              className={`py-2 px-4 ${isActive('/resultados') ? 'text-supercopa-gold font-medium' : 'text-supercopa-navy'}`}
              onClick={() => setIsOpen(false)}
            >
              Resultados
            </Link>
            <Link 
              to="/patrocinadores" 
              className={`py-2 px-4 ${isActive('/patrocinadores') ? 'text-supercopa-gold font-medium' : 'text-supercopa-navy'}`}
              onClick={() => setIsOpen(false)}
            >
              Patrocinadores
            </Link>
            <Link 
              to="/torneos-anteriores" 
              className={`py-2 px-4 ${isActive('/torneos-anteriores') ? 'text-supercopa-gold font-medium' : 'text-supercopa-navy'}`}
              onClick={() => setIsOpen(false)}
            >
              Torneos Anteriores
            </Link>
            <Link 
              to="/galeria" 
              className={`py-2 px-4 ${isActive('/galeria') ? 'text-supercopa-gold font-medium' : 'text-supercopa-navy'}`}
              onClick={() => setIsOpen(false)}
            >
              Galería
            </Link>
            <Link 
              to="/registro" 
              className="btn-accent text-center mx-4 mt-2"
              onClick={() => setIsOpen(false)}
            >
              REGISTRATE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
