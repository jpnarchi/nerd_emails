import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, CalendarDays, Trophy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DashboardCounts {
  equipos: number;
  jugadores: number;
  partidos: number;
  ediciones: number;
}

const Dashboard = () => {
  const [counts, setCounts] = useState<DashboardCounts>({
    equipos: 0,
    jugadores: 0,
    partidos: 0,
    ediciones: 0
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchCounts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { count: equiposCount, error: equiposError } = await supabase
          .from('equipos')
          .select('*', { count: 'exact', head: true });
          
        const { count: jugadoresCount, error: jugadoresError } = await supabase
          .from('jugadores')
          .select('*', { count: 'exact', head: true });
          
        const { count: partidosCount, error: partidosError } = await supabase
          .from('partidos')
          .select('*', { count: 'exact', head: true });
          
        const { count: edicionesCount, error: edicionesError } = await supabase
          .from('ediciones')
          .select('*', { count: 'exact', head: true });
        
        if (equiposError || jugadoresError || partidosError || edicionesError) {
          throw new Error('Error al cargar las estadísticas');
        }
        
        setCounts({
          equipos: equiposCount || 0,
          jugadores: jugadoresCount || 0,
          partidos: partidosCount || 0,
          ediciones: edicionesCount || 0
        });
      } catch (err: any) {
        console.error('Error fetching counts:', err);
        setError(err.message || 'Error al cargar las estadísticas');
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message || "Error al cargar las estadísticas",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchCounts();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-supercopa-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
        <p className="text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-supercopa-gold text-white rounded-md hover:bg-amber-600"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Equipos</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.equipos}</div>
            <p className="text-xs text-muted-foreground">
              Equipos registrados
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jugadores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.jugadores}</div>
            <p className="text-xs text-muted-foreground">
              Jugadores registrados
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Partidos</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.partidos}</div>
            <p className="text-xs text-muted-foreground">
              Partidos programados
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ediciones</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{counts.ediciones}</div>
            <p className="text-xs text-muted-foreground">
              Ediciones del torneo
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No hay actividad reciente para mostrar.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Próximos Partidos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No hay próximos partidos programados.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
