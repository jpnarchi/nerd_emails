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

interface Partido {
  id: string;
  fecha: string;
  hora: string | null;
  equipo_local_id: string;
  equipo_visitante_id: string;
  edicion_id: string;
  goles_local: number | null;
  goles_visitante: number | null;
  jugado: boolean | null;
  lugar: string | null;
  subcategoria_id: string;
  created_at: string;
}

interface Equipo {
  id: string;
  nombre: string;
}

interface Edicion {
  id: string;
  nombre: string;
}

interface Subcategoria {
  id: string;
  nombre: string;
}

const PartidosAdmin = () => {
  const { toast } = useToast();
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [ediciones, setEdiciones] = useState<Edicion[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentPartido, setCurrentPartido] = useState<Partido | null>(null);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [equipoLocal, setEquipoLocal] = useState('');
  const [equipoVisitante, setEquipoVisitante] = useState('');
  const [edicionId, setEdicionId] = useState('');
  const [subcategoriaId, setSubcategoriaId] = useState('');
  const [golesLocal, setGolesLocal] = useState('');
  const [golesVisitante, setGolesVisitante] = useState('');
  const [jugado, setJugado] = useState(false);
  const [lugar, setLugar] = useState('');
  const [editingId, setEditingId] = useState('');

  useEffect(() => {
    fetchPartidos();
    fetchEquipos();
    fetchEdiciones();
    fetchSubcategorias();
  }, []);

  const fetchPartidos = async () => {
    try {
      const { data, error } = await supabase
        .from('partidos')
        .select('*')
        .order('fecha', { ascending: true });

      if (error) throw error;
      setPartidos(data || []);
    } catch (error) {
      console.error('Error fetching partidos:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron cargar los partidos',
        variant: 'destructive',
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
    } catch (error) {
      console.error('Error fetching equipos:', error);
    }
  };

  const fetchEdiciones = async () => {
    try {
      const { data, error } = await supabase
        .from('ediciones')
        .select('*')
        .order('nombre');

      if (error) throw error;
      setEdiciones(data || []);
    } catch (error) {
      console.error('Error fetching ediciones:', error);
    }
  };

  const fetchSubcategorias = async () => {
    try {
      const { data, error } = await supabase
        .from('subcategorias')
        .select('*')
        .order('nombre');

      if (error) throw error;
      setSubcategorias(data || []);
    } catch (error) {
      console.error('Error fetching subcategorias:', error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setEditing(false);
    setCurrentPartido(null);
    resetForm();
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFecha('');
    setHora('');
    setEquipoLocal('');
    setEquipoVisitante('');
    setEdicionId('');
    setSubcategoriaId('');
    setGolesLocal('');
    setGolesVisitante('');
    setJugado(false);
    setLugar('');
  };

  const handleEdit = (partido: Partido) => {
    setEditingId(partido.id);
    setFecha(partido.fecha);
    setHora(partido.hora || '');
    setEquipoLocal(partido.equipo_local_id);
    setEquipoVisitante(partido.equipo_visitante_id);
    setEdicionId(partido.edicion_id);
    setSubcategoriaId(partido.subcategoria_id);
    setGolesLocal(partido.goles_local?.toString() || '');
    setGolesVisitante(partido.goles_visitante?.toString() || '');
    setJugado(partido.jugado || false);
    setLugar(partido.lugar || '');
    setEditing(true);
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fecha || !equipoLocal || !equipoVisitante || !edicionId || !subcategoriaId) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    const partidoData = {
      fecha,
      hora: hora || null,
      equipo_local_id: equipoLocal,
      equipo_visitante_id: equipoVisitante,
      edicion_id: edicionId,
      subcategoria_id: subcategoriaId,
      goles_local: golesLocal ? parseInt(golesLocal) : null,
      goles_visitante: golesVisitante ? parseInt(golesVisitante) : null,
      jugado: jugado || false,
      lugar: lugar || null,
    };

    try {
      let error;
      if (editing) {
        const { error: updateError } = await supabase
          .from('partidos')
          .update(partidoData)
          .eq('id', editingId);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('partidos')
          .insert([partidoData]);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: "Éxito",
        description: editing ? "Partido actualizado" : "Partido creado",
        variant: "default",
      });

      setOpen(false);
      fetchPartidos();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Ocurrió un error al guardar el partido",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('partidos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: 'Éxito',
        description: 'Partido eliminado correctamente',
        variant: 'default',
      });
      fetchPartidos();
    } catch (error) {
      console.error('Error deleting partido:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar el partido',
        variant: 'destructive',
      });
    }
  };

  const getEquipoNombre = (id: string) => {
    const equipo = equipos.find(e => e.id === id);
    return equipo ? equipo.nombre : 'Desconocido';
  };

  const getEdicionNombre = (id: string) => {
    const edicion = ediciones.find(e => e.id === id);
    return edicion ? edicion.nombre : 'Desconocido';
  };

  const getSubcategoriaNombre = (id: string) => {
    const subcategoria = subcategorias.find(s => s.id === id);
    return subcategoria ? subcategoria.nombre : 'Desconocido';
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Partidos</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Partido
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editing ? 'Editar Partido' : 'Nuevo Partido'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fecha">Fecha</Label>
                  <Input
                    id="fecha"
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hora">Hora</Label>
                  <Input
                    id="hora"
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="equipoLocal">Equipo Local</Label>
                  <Select value={equipoLocal} onValueChange={setEquipoLocal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione equipo local" />
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
                <div className="space-y-2">
                  <Label htmlFor="equipoVisitante">Equipo Visitante</Label>
                  <Select value={equipoVisitante} onValueChange={setEquipoVisitante}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione equipo visitante" />
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edicion">Edición</Label>
                  <Select value={edicionId} onValueChange={setEdicionId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione edición" />
                    </SelectTrigger>
                    <SelectContent>
                      {ediciones.map((edicion) => (
                        <SelectItem key={edicion.id} value={edicion.id}>
                          {edicion.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subcategoria">Subcategoría</Label>
                  <Select value={subcategoriaId} onValueChange={setSubcategoriaId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione subcategoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategorias.map((subcategoria) => (
                        <SelectItem key={subcategoria.id} value={subcategoria.id}>
                          {subcategoria.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="golesLocal">Goles Local</Label>
                  <Input
                    id="golesLocal"
                    type="number"
                    min="0"
                    value={golesLocal}
                    onChange={(e) => setGolesLocal(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="golesVisitante">Goles Visitante</Label>
                  <Input
                    id="golesVisitante"
                    type="number"
                    min="0"
                    value={golesVisitante}
                    onChange={(e) => setGolesVisitante(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lugar">Lugar</Label>
                <Input
                  id="lugar"
                  value={lugar}
                  onChange={(e) => setLugar(e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="jugado"
                    name="jugado"
                    className="h-4 w-4"
                    checked={jugado}
                    onChange={(e) => setJugado(e.target.checked)}
                    aria-labelledby="jugado-label"
                    title="Marcar si el partido ya fue jugado"
                    placeholder="Partido jugado"
                  />
                  <Label id="jugado-label" htmlFor="jugado" className="ml-2">
                    Partido Jugado
                  </Label>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">
                  {editing ? 'Actualizar' : 'Crear'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div>Cargando...</div>
      ) : partidos.length === 0 ? (
        <div>No hay partidos registrados</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Equipo Local</TableHead>
              <TableHead>Equipo Visitante</TableHead>
              <TableHead>Edición</TableHead>
              <TableHead>Subcategoría</TableHead>
              <TableHead>Goles</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Lugar</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partidos.map((partido) => (
              <TableRow key={partido.id}>
                <TableCell>{format(new Date(partido.fecha), 'dd/MM/yyyy', { locale: es })}</TableCell>
                <TableCell>{partido.hora}</TableCell>
                <TableCell>
                  {equipos.find(e => e.id === partido.equipo_local_id)?.nombre}
                </TableCell>
                <TableCell>
                  {equipos.find(e => e.id === partido.equipo_visitante_id)?.nombre}
                </TableCell>
                <TableCell>
                  {ediciones.find(e => e.id === partido.edicion_id)?.nombre}
                </TableCell>
                <TableCell>
                  {subcategorias.find(s => s.id === partido.subcategoria_id)?.nombre}
                </TableCell>
                <TableCell>
                  {partido.goles_local ?? 0} - {partido.goles_visitante ?? 0}
                </TableCell>
                <TableCell>
                  {partido.jugado ? 'Jugado' : 'Pendiente'}
                </TableCell>
                <TableCell>{partido.lugar}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(partido)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(partido.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default PartidosAdmin;
