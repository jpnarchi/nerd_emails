import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Edicion {
  id: string;
  nombre: string;
  anio: number;
  fecha_inicio: string;
  fecha_fin: string;
  created_at: string;
}

export default function EdicionesAdmin() {
  const [ediciones, setEdiciones] = useState<Edicion[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEdicion, setEditingEdicion] = useState<Edicion | null>(null);
  const [nombre, setNombre] = useState('');
  const [anio, setAnio] = useState<number>(new Date().getFullYear());
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const { toast } = useToast();

  const fetchEdiciones = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('ediciones')
        .select(`
          id,
          nombre,
          anio,
          fecha_inicio,
          fecha_fin,
          created_at
        `)
        .order('anio', { ascending: false });

      if (error) throw error;

      setEdiciones(data || []);
    } catch (error) {
      console.error('Error fetching ediciones:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al cargar las ediciones",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEdiciones();
  }, []);

  const handleEdit = (edicion: Edicion) => {
    setEditingEdicion(edicion);
    setNombre(edicion.nombre);
    setAnio(edicion.anio);
    setFechaInicio(edicion.fecha_inicio);
    setFechaFin(edicion.fecha_fin);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta edición?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('ediciones')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        variant: "default",
        title: "Éxito",
        description: "Edición eliminada correctamente",
      });

      fetchEdiciones();
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al eliminar la edición",
      });
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingEdicion(null);
    setNombre('');
    setAnio(new Date().getFullYear());
    setFechaInicio('');
    setFechaFin('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingEdicion) {
        const { error } = await supabase
          .from('ediciones')
          .update({
            nombre,
            anio,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
          })
          .eq('id', editingEdicion.id);

        if (error) throw error;
        toast({
          variant: "default",
          title: "Éxito",
          description: "Edición actualizada correctamente",
        });
      } else {
        const { error } = await supabase
          .from('ediciones')
          .insert([
            {
              nombre,
              anio,
              fecha_inicio: fechaInicio,
              fecha_fin: fechaFin,
            },
          ]);

        if (error) throw error;
        toast({
          variant: "default",
          title: "Éxito",
          description: "Edición creada correctamente",
        });
      }
      handleCloseDialog();
      fetchEdiciones();
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Ha ocurrido un error al guardar la edición",
      });
    }
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy', { locale: es });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ediciones</h1>
        <Button onClick={() => setIsDialogOpen(true)}>Nueva Edición</Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : ediciones.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No hay ediciones registradas</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Año</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Inicio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Fin</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ediciones.map((edicion) => (
                <tr key={edicion.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{edicion.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{edicion.anio}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{formatDate(edicion.fecha_inicio)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{formatDate(edicion.fecha_fin)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(edicion)} className="mr-2">
                      Editar
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(edicion.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingEdicion ? 'Editar Edición' : 'Nueva Edición'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="anio">Año</Label>
              <Input
                id="anio"
                type="number"
                value={anio}
                onChange={(e) => setAnio(parseInt(e.target.value))}
                required
                min={2000}
                max={2100}
              />
            </div>
            <div>
              <Label htmlFor="fechaInicio">Fecha de Inicio</Label>
              <Input
                id="fechaInicio"
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="fechaFin">Fecha de Fin</Label>
              <Input
                id="fechaFin"
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
                required
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseDialog}>
                Cancelar
              </Button>
              <Button type="submit">{editingEdicion ? 'Guardar' : 'Crear'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
