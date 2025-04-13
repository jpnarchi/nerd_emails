import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { useToast } from '../../components/ui/use-toast';

interface Categoria {
  id: string;
  nombre: string;
  created_at: string;
}

interface Subcategoria {
  id: string;
  nombre: string;
  categoria_id: string;
  created_at: string;
}

const SubcategoriasAdmin = () => {
  const { toast } = useToast();
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSubcategoria, setCurrentSubcategoria] = useState<Subcategoria | null>(null);
  const [nombre, setNombre] = useState('');
  const [categoriaId, setCategoriaId] = useState('');

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([fetchSubcategorias(), fetchCategorias()]);
    };
    loadData();
  }, []);

  const fetchSubcategorias = async () => {
    try {
      const { data, error } = await supabase
        .from('subcategorias')
        .select('*')
        .order('nombre');

      if (error) throw error;
      setSubcategorias(data || []);
    } catch (error: any) {
      console.error('Error fetching subcategorias:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al cargar las subcategorías",
      });
    }
  };

  const fetchCategorias = async () => {
    try {
      const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre');

      if (error) throw error;
      setCategorias(data || []);
    } catch (error: any) {
      console.error('Error fetching categorias:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al cargar las categorías",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (subcategoria?: Subcategoria) => {
    if (subcategoria) {
      setIsEditing(true);
      setCurrentSubcategoria(subcategoria);
      setNombre(subcategoria.nombre);
      setCategoriaId(subcategoria.categoria_id);
    } else {
      setIsEditing(false);
      setCurrentSubcategoria(null);
      setNombre('');
      setCategoriaId('');
    }
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setCurrentSubcategoria(null);
    setNombre('');
    setCategoriaId('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && currentSubcategoria?.id) {
        const { error } = await supabase
          .from('subcategorias')
          .update({
            nombre: nombre,
            categoria_id: categoriaId,
          })
          .eq('id', currentSubcategoria.id);

        if (error) throw error;
        toast({
          variant: "default",
          title: "Éxito",
          description: "Subcategoría actualizada correctamente",
        });
      } else {
        const { error } = await supabase
          .from('subcategorias')
          .insert([
            {
              nombre: nombre,
              categoria_id: categoriaId,
            },
          ]);

        if (error) throw error;
        toast({
          variant: "default",
          title: "Éxito",
          description: "Subcategoría creada correctamente",
        });
      }
      handleCloseDialog();
      fetchSubcategorias();
    } catch (error) {
      console.error('Error saving subcategoria:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al guardar la subcategoría",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar esta subcategoría?')) return;

    try {
      const { error } = await supabase
        .from('subcategorias')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        variant: "default",
        title: "Éxito",
        description: "Subcategoría eliminada correctamente",
      });
      fetchSubcategorias();
    } catch (error) {
      console.error('Error deleting subcategoria:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error al eliminar la subcategoría",
      });
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subcategorías</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>Nueva Subcategoría</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {isEditing ? 'Editar Subcategoría' : 'Nueva Subcategoría'}
              </DialogTitle>
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
                <Label htmlFor="categoria">Categoría</Label>
                <Select
                  value={categoriaId}
                  onValueChange={(value) => setCategoriaId(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategorias.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No hay subcategorías registradas
              </TableCell>
            </TableRow>
          ) : (
            subcategorias.map((subcategoria) => (
              <TableRow key={subcategoria.id}>
                <TableCell>{subcategoria.nombre}</TableCell>
                <TableCell>
                  {categorias.find((c) => c.id === subcategoria.categoria_id)?.nombre}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleOpenDialog(subcategoria)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(subcategoria.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubcategoriasAdmin; 