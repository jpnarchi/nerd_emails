import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Categoria {
  id: string;
  nombre: string;
  created_at: string;
}

const CategoriasAdmin = () => {
  const { toast } = useToast();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategoria, setCurrentCategoria] = useState<Categoria | null>(null);
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      setLoading(true);
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

  const handleOpenDialog = () => {
    setIsEditing(false);
    setCurrentCategoria(null);
    setNombre('');
    setOpen(true);
  };

  const handleEditCategoria = (categoria: Categoria) => {
    setIsEditing(true);
    setCurrentCategoria(categoria);
    setNombre(categoria.nombre);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "El nombre de la categoría es obligatorio",
      });
      return;
    }
    
    try {
      const categoriaData = {
        nombre: nombre.trim()
      };
      
      if (isEditing && currentCategoria) {
        // Actualizar categoría existente
        const { error } = await supabase
          .from('categorias')
          .update(categoriaData)
          .eq('id', currentCategoria.id);
          
        if (error) throw error;
        
        toast({
          title: "Categoría actualizada",
          description: "La categoría ha sido actualizada correctamente",
        });
      } else {
        // Crear nueva categoría
        const { error } = await supabase
          .from('categorias')
          .insert(categoriaData);
          
        if (error) throw error;
        
        toast({
          title: "Categoría creada",
          description: "La categoría ha sido creada correctamente",
        });
      }
      
      handleCloseDialog();
      fetchCategorias();
    } catch (error: any) {
      console.error('Error saving categoria:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al guardar la categoría",
      });
    }
  };

  const handleDeleteCategoria = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('categorias')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Categoría eliminada",
        description: "La categoría ha sido eliminada correctamente",
      });
      
      fetchCategorias();
    } catch (error: any) {
      console.error('Error deleting categoria:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al eliminar la categoría",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Categorías</h1>
        <Button onClick={handleOpenDialog} className="bg-supercopa-gold hover:bg-amber-600">
          <Plus className="mr-2 h-4 w-4" /> Nueva Categoría
        </Button>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-supercopa-gold"></div>
        </div>
      ) : categorias.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-muted-foreground mb-4">No hay categorías registradas</p>
          <Button onClick={handleOpenDialog} variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Registrar la primera categoría
          </Button>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categorias.map((categoria) => (
                <TableRow key={categoria.id}>
                  <TableCell>{categoria.nombre}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mr-2"
                      onClick={() => handleEditCategoria(categoria)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteCategoria(categoria.id)}
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
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Editar Categoría' : 'Nueva Categoría'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre de la categoría"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancelar</Button>
              </DialogClose>
              <Button 
                type="submit" 
                className="bg-supercopa-gold hover:bg-amber-600"
              >
                {isEditing ? 'Guardar Cambios' : 'Crear Categoría'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoriasAdmin; 