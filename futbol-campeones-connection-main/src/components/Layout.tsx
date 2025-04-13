
import { ReactNode } from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoading } from '../context/LoadingContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useLoading();
  const location = useLocation();
  
  // No incluir el Layout estándar en rutas de administración
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {isLoading ? (
            <div className="flex justify-center items-center h-[calc(100vh-16rem)]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-supercopa-gold"></div>
            </div>
          ) : (
            children
          )}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
