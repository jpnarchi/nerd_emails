import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Administrador } from '@/types/database.types';

const AdministradoresAdmin = () => {
  const [administradores, setAdministradores] = useState<Administrador[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState<Administrador | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    rol: 'editor' as 'admin' | 'editor',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchAdministradores();
  }, []);

  const fetchAdministradores = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('administradores')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAdministradores(data?.map(admin => ({
        ...admin,
        rol: admin.rol as 'admin' | 'editor',
        updated_at: admin.updated_at || admin.created_at
      })) || []);
    } catch (error) {
      console.error('Error fetching administradores:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudieron cargar los administradores",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (admin?: Administrador) => {
    if (admin) {
      setIsEditing(true);
      setCurrentAdmin(admin);
      setFormData({
        nombre: admin.nombre,
        correo: admin.correo,
        rol: admin.rol,
      });
    } else {
      setIsEditing(false);
      setCurrentAdmin(null);
      setFormData({
        nombre: '',
        correo: '',
        rol: 'editor',
      });
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCurrentAdmin(null);
    setFormData({
      nombre: '',
      correo: '',
      rol: 'editor',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing && currentAdmin) {
        const { error } = await supabase
          .from('administradores')
          .update({
            nombre: formData.nombre,
            correo: formData.correo,
            rol: formData.rol,
            updated_at: new Date().toISOString(),
          })
          .eq('id', currentAdmin.id);

        if (error) throw error;
        toast({
          title: "Administrador actualizado",
          description: "Los cambios se han guardado correctamente",
        });
      } else {
        const { error } = await supabase
          .from('administradores')
          .insert([{
            nombre: formData.nombre,
            correo: formData.correo,
            rol: formData.rol,
          }]);

        if (error) throw error;
        toast({
          title: "Administrador creado",
          description: "El administrador se ha creado correctamente",
        });
      }
      handleCloseDialog();
      fetchAdministradores();
    } catch (error) {
      console.error('Error saving administrador:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo guardar el administrador",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este administrador?')) return;

    try {
      const { error } = await supabase
        .from('administradores')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({
        title: "Administrador eliminado",
        description: "El administrador se ha eliminado correctamente",
      });
      fetchAdministradores();
    } catch (error) {
      console.error('Error deleting administrador:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo eliminar el administrador",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-supercopa-gold"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Administradores</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Administrador
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {isEditing ? 'Editar Administrador' : 'Nuevo Administrador'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="correo">Correo</Label>
                <Input
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rol">Rol</Label>
                <Select
                  value={formData.rol}
                  onValueChange={(value: 'admin' | 'editor') => setFormData({ ...formData, rol: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
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

      {administradores.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No hay administradores registrados
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Correo</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Fecha de creación</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {administradores.map((admin) => (
              <TableRow key={admin.id}>
                <TableCell>{admin.nombre}</TableCell>
                <TableCell>{admin.correo}</TableCell>
                <TableCell className="capitalize">{admin.rol}</TableCell>
                <TableCell>{new Date(admin.created_at).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenDialog(admin)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(admin.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AdministradoresAdmin; 