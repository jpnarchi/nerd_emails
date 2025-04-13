
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-supercopa-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/b3cc060b-9f29-47a4-be9a-7eba29ca10ab.png" 
                alt="SuperCopa Mex Logo"
                className="h-16 p-2 rounded-md"
              />
              <h3 className="text-2xl font-bold ml-3 text-supercopa-gold">SuperCopa Mex</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Elevando el nivel del fútbol en México, promoviendo la amistad a través del deporte desde 2023.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-supercopa-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-supercopa-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-supercopa-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-supercopa-gold">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/resultados" className="text-gray-300 hover:text-white transition-colors">Resultados</Link>
              </li>
              <li>
                <Link to="/patrocinadores" className="text-gray-300 hover:text-white transition-colors">Patrocinadores</Link>
              </li>
              <li>
                <Link to="/torneos-anteriores" className="text-gray-300 hover:text-white transition-colors">Torneos Anteriores</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-white transition-colors">Galería</Link>
              </li>
              <li>
                <Link to="/registro" className="text-gray-300 hover:text-white transition-colors">Registro</Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-white flex items-center transition-colors">
                  <Shield size={16} className="mr-1" />
                  Administración
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-supercopa-gold">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-supercopa-gold" />
                <span className="text-gray-300">Sporti Valle Poniente, San Pedro Garza García, México</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-supercopa-gold" />
                <a href="mailto:info@supercopamex.com" className="text-gray-300 hover:text-white transition-colors">
                  info@supercopamex.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-supercopa-gold" />
                <a href="tel:+5281234567" className="text-gray-300 hover:text-white transition-colors">
                  +52 81 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} SuperCopa Mex. Todos los derechos reservados.</p>
            <div className="mt-3 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors mr-4">Política de Privacidad</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
