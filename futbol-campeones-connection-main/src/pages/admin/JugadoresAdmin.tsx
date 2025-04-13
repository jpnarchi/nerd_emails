import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Jugador {
  id: string;
  nombre: string;
  apellido: string;
  fecha_nacimiento: string;
  numero_camiseta: number | null;
  equipo_id: string | null;
  created_at: string;
  updated_at: string;
}

interface Equipo {
  id: string;
  nombre: string;
}

const JugadoresAdmin = () => {
  const { toast } = useToast();
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentJugador, setCurrentJugador] = useState<Jugador | null>(null);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [numeroCamiseta, setNumeroCamiseta] = useState<string>('');
  const [equipoId, setEquipoId] = useState<string>('');

  useEffect(() => {
    fetchJugadores();
    fetchEquipos();
  }, []);

  const fetchJugadores = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('jugadores')
        .select('*')
        .order('apellido, nombre');

      if (error) throw error;
      setJugadores(data || []);
    } catch (error: any) {
      console.error('Error fetching jugadores:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al cargar los jugadores",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchEquipos = async () => {
    try {
      const { data, error } = await supabase
        .from('equipos')
        .select('*')
        .order('nombre');

      if (error) throw error;
      setEquipos(data || []);
    } catch (error: any) {
      console.error('Error fetching equipos:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al cargar los equipos",
      });
    }
  };

  const handleOpenDialog = () => {
    setIsEditing(false);
    setCurrentJugador(null);
    setNombre('');
    setApellido('');
    setFechaNacimiento('');
    setNumeroCamiseta('');
    setEquipoId('');
    setOpen(true);
  };

  const handleEditJugador = (jugador: Jugador) => {
    setIsEditing(true);
    setCurrentJugador(jugador);
    setNombre(jugador.nombre);
    setApellido(jugador.apellido);
    setFechaNacimiento(jugador.fecha_nacimiento);
    setNumeroCamiseta(jugador.numero_camiseta?.toString() || '');
    setEquipoId(jugador.equipo_id || '');
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !apellido || !fechaNacimiento) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Los campos nombre, apellido y fecha de nacimiento son obligatorios",
      });
      return;
    }
    
    try {
      const jugadorData = {
        nombre,
        apellido,
        fecha_nacimiento: fechaNacimiento,
        numero_camiseta: numeroCamiseta ? parseInt(numeroCamiseta) : null,
        equipo_id: equipoId || null
      };
      
      if (isEditing && currentJugador) {
        // Actualizar jugador existente
        const { error } = await supabase
          .from('jugadores')
          .update(jugadorData)
          .eq('id', currentJugador.id);
          
        if (error) throw error;
        
        toast({
          title: "Jugador actualizado",
          description: "El jugador ha sido actualizado correctamente",
        });
      } else {
        // Crear nuevo jugador
        const { error } = await supabase
          .from('jugadores')
          .insert(jugadorData);
          
        if (error) throw error;
        
        toast({
          title: "Jugador creado",
          description: "El jugador ha sido creado correctamente",
        });
      }
      
      handleCloseDialog();
      fetchJugadores();
    } catch (error: any) {
      console.error('Error saving jugador:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al guardar el jugador",
      });
    }
  };

  const handleDeleteJugador = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este jugador?')) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('jugadores')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Jugador eliminado",
        description: "El jugador ha sido eliminado correctamente",
      });
      
      fetchJugadores();
    } catch (error: any) {
      console.error('Error deleting jugador:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al eliminar el jugador",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Jugadores</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenDialog} className="bg-supercopa-gold hover:bg-amber-600">
              <Plus className="mr-2 h-4 w-4" /> Nuevo Jugador
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? 'Editar Jugador' : 'Nuevo Jugador'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numeroCamiseta">Número de Camiseta</Label>
                <Input
                  id="numeroCamiseta"
                  type="number"
                  value={numeroCamiseta}
                  onChange={(e) => setNumeroCamiseta(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="equipo">Equipo</Label>
                <Select value={equipoId} onValueChange={setEquipoId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un equipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {equipos.map((equipo) => (
                      <SelectItem key={equipo.id} value={equipo.id}>
                        {equipo.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {isEditing ? 'Actualizar' : 'Crear'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-supercopa-gold"></div>
        </div>
      ) : jugadores.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-muted-foreground mb-4">No hay jugadores registrados</p>
          <Button onClick={handleOpenDialog} variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Registrar el primer jugador
          </Button>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Apellido</TableHead>
                <TableHead>Fecha de Nacimiento</TableHead>
                <TableHead>Número</TableHead>
                <TableHead>Equipo</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jugadores.map((jugador) => (
                <TableRow key={jugador.id}>
                  <TableCell className="font-medium">{jugador.nombre}</TableCell>
                  <TableCell>{jugador.apellido}</TableCell>
                  <TableCell>
                    {format(new Date(jugador.fecha_nacimiento), 'dd/MM/yyyy', { locale: es })}
                  </TableCell>
                  <TableCell>{jugador.numero_camiseta || '-'}</TableCell>
                  <TableCell>
                    {equipos.find(e => e.id === jugador.equipo_id)?.nombre || '-'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mr-2"
                      onClick={() => handleEditJugador(jugador)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteJugador(jugador.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default JugadoresAdmin;
