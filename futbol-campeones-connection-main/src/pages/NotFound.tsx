
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="mb-6 text-supercopa-gold">
            <span className="text-9xl font-bold">404</span>
          </div>
          <h1 className="text-3xl font-bold text-supercopa-navy mb-4">Página no encontrada</h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            <Home size={18} className="mr-2" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
