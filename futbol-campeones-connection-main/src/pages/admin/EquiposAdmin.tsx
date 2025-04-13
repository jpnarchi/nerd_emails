import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2, Upload } from 'lucide-react';

interface Equipo {
  id: string;
  nombre: string;
  logo_url: string | null;
  categoria_id: string | null;
  subcategoria_id: string | null;
  created_at: string;
  updated_at: string;
}

interface Categoria {
  id: string;
  nombre: string;
}

interface Subcategoria {
  id: string;
  nombre: string;
  categoria_id: string;
}

const EquiposAdmin = () => {
  const { toast } = useToast();
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEquipo, setCurrentEquipo] = useState<Equipo | null>(null);
  const [nombre, setNombre] = useState('');
  const [logo, setLogo] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [categoriaId, setCategoriaId] = useState<string>('');
  const [subcategoriaId, setSubcategoriaId] = useState<string>('');

  useEffect(() => {
    fetchEquipos();
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (categoriaId) {
      fetchSubcategorias(categoriaId);
    } else {
      setSubcategorias([]);
      setSubcategoriaId('');
    }
  }, [categoriaId]);

  const fetchEquipos = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
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
    }
  };

  const fetchSubcategorias = async (categoriaId: string) => {
    try {
      const { data, error } = await supabase
        .from('subcategorias')
        .select('*')
        .eq('categoria_id', categoriaId)
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

  const handleOpenDialog = () => {
    setIsEditing(false);
    setCurrentEquipo(null);
    setNombre('');
    setLogo('');
    setImageFile(null);
    setCategoriaId('');
    setSubcategoriaId('');
    setOpen(true);
  };

  const handleEditEquipo = (equipo: Equipo) => {
    setIsEditing(true);
    setCurrentEquipo(equipo);
    setNombre(equipo.nombre);
    setLogo(equipo.logo_url || '');
    setCategoriaId(equipo.categoria_id || '');
    setSubcategoriaId(equipo.subcategoria_id || '');
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      setUploadingImage(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `equipos/${fileName}`;
      
      // Intentar usar el bucket 'public' que suele existir por defecto
      const { error: uploadError } = await supabase.storage
        .from('public')
        .upload(filePath, file);
        
      if (uploadError) {
        console.error('Error al subir imagen:', uploadError);
        // Si falla, devolver una URL vacía para que el equipo se pueda crear sin logo
        return '';
      }
      
      const { data } = supabase.storage
        .from('public')
        .getPublicUrl(filePath);
        
      return data.publicUrl;
    } catch (error: any) {
      console.error('Error uploading image:', error);
      // Si hay un error, devolver una URL vacía para que el equipo se pueda crear sin logo
      return '';
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "El nombre del equipo es obligatorio",
      });
      return;
    }
    
    try {
      let logoUrl = logo;
      
      if (imageFile) {
        logoUrl = await uploadImage(imageFile);
      }
      
      if (isEditing && currentEquipo) {
        // Actualizar equipo existente
        const { error } = await supabase
          .from('equipos')
          .update({
            nombre,
            logo_url: logoUrl,
            categoria_id: categoriaId || null,
            subcategoria_id: subcategoriaId || null
          })
          .eq('id', currentEquipo.id);
          
        if (error) throw error;
        
        toast({
          title: "Equipo actualizado",
          description: "El equipo ha sido actualizado correctamente",
        });
      } else {
        // Crear nuevo equipo
        const { error } = await supabase
          .from('equipos')
          .insert({
            nombre,
            logo_url: logoUrl,
            categoria_id: categoriaId || null,
            subcategoria_id: subcategoriaId || null
          });
          
        if (error) throw error;
        
        toast({
          title: "Equipo creado",
          description: "El equipo ha sido creado correctamente",
        });
      }
      
      handleCloseDialog();
      fetchEquipos();
    } catch (error: any) {
      console.error('Error saving equipo:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al guardar el equipo",
      });
    }
  };

  const handleDeleteEquipo = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este equipo?')) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from('equipos')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Equipo eliminado",
        description: "El equipo ha sido eliminado correctamente",
      });
      
      fetchEquipos();
    } catch (error: any) {
      console.error('Error deleting equipo:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Error al eliminar el equipo",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Equipos</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenDialog} className="bg-supercopa-gold hover:bg-amber-600">
              <Plus className="mr-2 h-4 w-4" /> Nuevo Equipo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? 'Editar Equipo' : 'Nuevo Equipo'}</DialogTitle>
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
                <Label htmlFor="logo">Logo</Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoría</Label>
                <Select value={categoriaId} onValueChange={setCategoriaId}>
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
              <div className="space-y-2">
                <Label htmlFor="subcategoria">Subcategoría</Label>
                <Select value={subcategoriaId} onValueChange={setSubcategoriaId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una subcategoría" />
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
      ) : equipos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-muted-foreground mb-4">No hay equipos registrados</p>
          <Button onClick={handleOpenDialog} variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Registrar el primer equipo
          </Button>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Subcategoría</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipos.map((equipo) => (
                <TableRow key={equipo.id}>
                  <TableCell>
                    {equipo.logo_url ? (
                      <img 
                        src={equipo.logo_url} 
                        alt={equipo.nombre} 
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 text-xs">{equipo.nombre.charAt(0)}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{equipo.nombre}</TableCell>
                  <TableCell>
                    {categorias.find(c => c.id === equipo.categoria_id)?.nombre || '-'}
                  </TableCell>
                  <TableCell>
                    {subcategorias.find(s => s.id === equipo.subcategoria_id)?.nombre || '-'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mr-2"
                      onClick={() => handleEditEquipo(equipo)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeleteEquipo(equipo.id)}
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

export default EquiposAdmin;
