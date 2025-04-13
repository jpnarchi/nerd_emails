import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/components/ui/use-toast";
import {
  BarChart3,
  CalendarDays,
  LogOut,
  Users,
  Shield,
  Settings,
  Trophy,
  Home,
  Menu as MenuIcon,
  List,
  UserCog
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { checkAdminAuth } from '@/utils/adminAuth';

type UserInfo = {
  id: string;
  email: string;
};

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Usar location para determinar ruta activa
  const currentPath = location.pathname;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        // Verificar si hay una sesión activa y si es administrador
        const authResult = await checkAdminAuth();
        
        if (authResult.status !== "authenticated" || !authResult.isAdmin) {
          console.log("No hay sesión activa o no es administrador:", authResult);
          navigate('/admin');
          return;
        }
        
        // Usuario autenticado, establecer información básica
        if (authResult.session) {
          setUserInfo({
            id: authResult.session.user.id,
            email: authResult.session.user.email || '',
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al verificar autenticación:", error);
        toast({
          variant: "destructive",
          title: "Error de autenticación",
          description: "Ha ocurrido un error al verificar tu sesión",
        });
        navigate('/admin');
      }
    };
    
    checkAuth();
    
    // Configurar el listener de cambio de estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.email);
      
      if (event === 'SIGNED_OUT') {
        navigate('/admin');
      } else if (event === 'SIGNED_IN') {
        // Verificamos si es administrador al iniciar sesión
        const authResult = await checkAdminAuth();
        if (authResult.status === "authenticated" && authResult.isAdmin) {
          setUserInfo({
            id: authResult.session.user.id,
            email: authResult.session.user.email || '',
          });
          setLoading(false);
        } else {
          // No es administrador, redirigir al login
          navigate('/admin');
        }
      }
    });
    
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [navigate, toast]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      navigate('/admin');
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo cerrar la sesión correctamente",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-supercopa-gold"></div>
      </div>
    );
  }

  if (!userInfo) {
    navigate('/admin');
    return null;
  }

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar estática en desktop */}
      <div className="hidden md:block w-64 shrink-0 border-r bg-background">
        <div className="h-full p-4 flex flex-col">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/b3cc060b-9f29-47a4-be9a-7eba29ca10ab.png" 
              alt="SuperCopa Mex Logo" 
              className="h-8 mr-2"
            />
            <span className="ml-2 font-semibold text-lg">SuperCopa</span>
          </div>
          
          <nav className="space-y-1 flex-1">
            <Link to="/admin/dashboard" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
            
            <Link to="/admin/dashboard/equipos" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/equipos' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <Shield className="h-4 w-4 mr-2" />
              Equipos
            </Link>
            
            <Link to="/admin/dashboard/jugadores" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/jugadores' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <Users className="h-4 w-4 mr-2" />
              Jugadores
            </Link>
            
            <Link to="/admin/dashboard/partidos" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/partidos' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <CalendarDays className="h-4 w-4 mr-2" />
              Partidos
            </Link>
            
            <Link to="/admin/dashboard/ediciones" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/ediciones' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <Trophy className="h-4 w-4 mr-2" />
              Ediciones
            </Link>

            <Link to="/admin/dashboard/categorias" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/categorias' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <List className="h-4 w-4 mr-2" />
              Categorías
            </Link>

            <Link to="/admin/dashboard/subcategorias" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/subcategorias' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <List className="h-4 w-4 mr-2" />
              Subcategorías
            </Link>

            <Link to="/admin/dashboard/administradores" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/administradores' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <UserCog className="h-4 w-4 mr-2" />
              Administradores
            </Link>
            
            <Link to="/admin/dashboard/configuracion" className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/configuracion' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}>
              <Settings className="h-4 w-4 mr-2" />
              Configuración
            </Link>
          </nav>
          
          <div className="pt-2 mt-6 border-t space-y-1">
            <Link to="/" className="flex items-center px-3 py-2 rounded-md text-sm hover:bg-accent/50">
              <Home className="h-4 w-4 mr-2" />
              Volver al sitio
            </Link>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start px-3" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Header de la aplicación */}
        <header className="h-14 border-b bg-background/95 backdrop-blur flex items-center px-4 sticky top-0 z-10">
          <div className="md:hidden">
            <Button variant="outline" size="icon" className="mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
          
          <div className="flex-1">
            <h1 className="text-lg font-semibold">
              {currentPath === '/admin/dashboard' && 'Dashboard'}
              {currentPath === '/admin/dashboard/equipos' && 'Equipos'}
              {currentPath === '/admin/dashboard/jugadores' && 'Jugadores'}
              {currentPath === '/admin/dashboard/partidos' && 'Partidos'}
              {currentPath === '/admin/dashboard/ediciones' && 'Ediciones'}
              {currentPath === '/admin/dashboard/categorias' && 'Categorías'}
              {currentPath === '/admin/dashboard/subcategorias' && 'Subcategorías'}
              {currentPath === '/admin/dashboard/administradores' && 'Administradores'}
              {currentPath === '/admin/dashboard/configuracion' && 'Configuración'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">
              {userInfo.email}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="h-8 w-8"
              title="Cerrar sesión"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>
        
        {/* Menú móvil (oculto por defecto) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b bg-background">
            <nav className="px-2 py-3">
              <Link 
                to="/admin/dashboard" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
              
              <Link 
                to="/admin/dashboard/equipos" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/equipos' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield className="h-4 w-4 mr-2" />
                Equipos
              </Link>
              
              <Link 
                to="/admin/dashboard/jugadores" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/jugadores' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4 mr-2" />
                Jugadores
              </Link>
              
              <Link 
                to="/admin/dashboard/partidos" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/partidos' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <CalendarDays className="h-4 w-4 mr-2" />
                Partidos
              </Link>
              
              <Link 
                to="/admin/dashboard/ediciones" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/ediciones' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Trophy className="h-4 w-4 mr-2" />
                Ediciones
              </Link>

              <Link 
                to="/admin/dashboard/categorias" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/categorias' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <List className="h-4 w-4 mr-2" />
                Categorías
              </Link>

              <Link 
                to="/admin/dashboard/subcategorias" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/subcategorias' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <List className="h-4 w-4 mr-2" />
                Subcategorías
              </Link>

              <Link 
                to="/admin/dashboard/administradores" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/administradores' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserCog className="h-4 w-4 mr-2" />
                Administradores
              </Link>
              
              <Link 
                to="/admin/dashboard/configuracion" 
                className={`flex items-center px-3 py-2 rounded-md text-sm ${currentPath === '/admin/dashboard/configuracion' ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Configuración
              </Link>
              
              <div className="pt-2 mt-2 border-t">
                <Link 
                  to="/" 
                  className="flex items-center px-3 py-2 rounded-md text-sm hover:bg-accent/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Volver al sitio
                </Link>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-start px-3 mt-1" 
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar sesión
                </Button>
              </div>
            </nav>
          </div>
        )}
        
        {/* Contenido principal */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
