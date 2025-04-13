import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus, User } from 'lucide-react';

interface Categoria {
  id: string;
  nombre: string;
  subcategorias?: Subcategoria[];
}

interface Subcategoria {
  id: string;
  nombre: string;
  categoria_id: string;
}

interface Administrador {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
}

const ConfiguracionAdmin = () => {
  const { toast } = useToast();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [administradores, setAdministradores] = useState<Administrador[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [categoriaOpen, setCategoriaOpen] = useState(false);
  const [subcategoriaOpen, setSubcategoriaOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  
  const [isEditingCategoria, setIsEditingCategoria] = useState(false);
  const [isEditingSubcategoria, setIsEditingSubcategoria] = useState(false);
  
  const [currentCategoria, setCurrentCategoria] = useState<Categoria | null>(null);
  const [currentSubcategoria, setCurrentSubcategoria] = useState<Subcategoria | null>(null);
  
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [nombreSubcategoria, setNombreSubcategoria] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  
  const [nombreAdmin, setNombreAdmin] = useState('');
  const [correoAdmin, setCorreoAdmin] = useState('');
  const [passwordAdmin, setPasswordAdmin] = useState('');
  const [rolAdmin, setRolAdmin] = useState('editor');
  
  const fetchCategorias = async () => {
    try {
      console.log('Fetching categories...');
      const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .order('nombre', { ascending: true });
        
      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
      console.log('Categories fetched:', data);
      setCategorias(data || []);
    } catch (error: any) {
      console.error('Caught error when fetching categories:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const fetchSubcategorias = async () => {
    try {
      console.log('Fetching subcategories...');
      const { data, error } = await supabase
        .from('subcategorias')
        .select(`
          *,
          categoria:categoria_id(nombre)
        `)
        .order('nombre', { ascending: true });
        
      if (error) {
        console.error('Error fetching subcategories:', error);
        throw error;
      }
      console.log('Subcategories fetched:', data);
      setSubcategorias(data || []);
    } catch (error: any) {
      console.error('Caught error when fetching subcategories:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAdministradores = async () => {
    try {
      console.log('Fetching administrators...');
      const { data, error } = await supabase
        .from('administradores')
        .select('*')
        .order('nombre', { ascending: true });
        
      if (error) {
        console.error('Error fetching administrators:', error);
        throw error;
      }
      console.log('Administrators fetched:', data);
      setAdministradores(data || []);
    } catch (error: any) {
      console.error('Caught error when fetching administrators:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      console.log('Loading data...');
      const sessionResult = await supabase.auth.getSession();
      console.log('Current session:', sessionResult);
      
      await Promise.all([fetchCategorias(), fetchSubcategorias(), fetchAdministradores()]);
    };
    
    loadData();
  }, []);

  const handleOpenCategoriaDialog = (categoria?: Categoria) => {
    if (categoria) {
      setIsEditingCategoria(true);
      setCurrentCategoria(categoria);
      setNombreCategoria(categoria.nombre);
    } else {
      setIsEditingCategoria(false);
      setCurrentCategoria(null);
      setNombreCategoria('');
    }
    setCategoriaOpen(true);
  };

  const handleCloseCategoriaDialog = () => {
    setCategoriaOpen(false);
    setIsEditingCategoria(false);
    setCurrentCategoria(null);
    setNombreCategoria('');
  };

  const handleSubmitCategoria = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting category form...');
    console.log('Is editing:', isEditingCategoria);
    console.log('Category data:', { id: currentCategoria?.id, nombre: nombreCategoria });
    
    try {
      if (isEditingCategoria && currentCategoria) {
        console.log('Updating category...');
        const { data, error } = await supabase
          .from('categorias')
          .update({ nombre: nombreCategoria })
          .eq('id', currentCategoria.id)
          .select();
          
        if (error) {
          console.error('Error updating category:', error);
          throw error;
        }
        
        console.log('Category updated:', data);
        toast({
          title: "Categoría actualizada",
          description: "La categoría ha sido actualizada correctamente",
        });
      } else {
        console.log('Creating new category...');
        const { data, error } = await supabase
          .from('categorias')
          .insert({ nombre: nombreCategoria })
          .select();
          
        if (error) {
          console.error('Error creating category:', error);
          throw error;
        }
        
        console.log('Category created:', data);
        toast({
          title: "Categoría creada",
          description: "La categoría ha sido creada correctamente",
        });
      }
      
      handleCloseCategoriaDialog();
      fetchCategorias();
    } catch (error: any) {
      console.error('Caught error in category form submission:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleDeleteCategoria = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta categoría? Se eliminarán todas las subcategorías asociadas.')) {
      try {
        console.log('Deleting category:', id);
        const { error } = await supabase
          .from('categorias')
          .delete()
          .eq('id', id);
          
        if (error) {
          console.error('Error deleting category:', error);
          throw error;
        }
        
        console.log('Category deleted successfully');
        toast({
          title: "Categoría eliminada",
          description: "La categoría ha sido eliminada correctamente",
        });
        
        fetchCategorias();
        fetchSubcategorias();
      } catch (error: any) {
        console.error('Caught error when deleting category:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    }
  };

  const handleOpenSubcategoriaDialog = (subcategoria?: Subcategoria) => {
    if (subcategoria) {
      setIsEditingSubcategoria(true);
      setCurrentSubcategoria(subcategoria);
      setNombreSubcategoria(subcategoria.nombre);
      setCategoriaId(subcategoria.categoria_id);
    } else {
      setIsEditingSubcategoria(false);
      setCurrentSubcategoria(null);
      setNombreSubcategoria('');
      setCategoriaId(categorias[0]?.id || '');
    }
    setSubcategoriaOpen(true);
  };

  const handleCloseSubcategoriaDialog = () => {
    setSubcategoriaOpen(false);
    setIsEditingSubcategoria(false);
    setCurrentSubcategoria(null);
    setNombreSubcategoria('');
    setCategoriaId('');
  };

  const handleSubmitSubcategoria = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting subcategory form...');
    console.log('Subcategory data:', { 
      id: currentSubcategoria?.id, 
      nombre: nombreSubcategoria, 
      categoria_id: categoriaId 
    });
    
    try {
      if (isEditingSubcategoria && currentSubcategoria) {
        console.log('Updating subcategory...');
        const { data, error } = await supabase
          .from('subcategorias')
          .update({
            nombre: nombreSubcategoria,
            categoria_id: categoriaId
          })
          .eq('id', currentSubcategoria.id)
          .select();
          
        if (error) {
          console.error('Error updating subcategory:', error);
          throw error;
        }
        
        console.log('Subcategory updated:', data);
        toast({
          title: "Subcategoría actualizada",
          description: "La subcategoría ha sido actualizada correctamente",
        });
      } else {
        console.log('Creating new subcategory...');
        const { data, error } = await supabase
          .from('subcategorias')
          .insert({
            nombre: nombreSubcategoria,
            categoria_id: categoriaId
          })
          .select();
          
        if (error) {
          console.error('Error creating subcategory:', error);
          throw error;
        }
        
        console.log('Subcategory created:', data);
        toast({
          title: "Subcategoría creada",
          description: "La subcategoría ha sido creada correctamente",
        });
      }
      
      handleCloseSubcategoriaDialog();
      fetchSubcategorias();
    } catch (error: any) {
      console.error('Caught error in subcategory form submission:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleDeleteSubcategoria = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta subcategoría?')) {
      try {
        const { error } = await supabase
          .from('subcategorias')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        
        toast({
          title: "Subcategoría eliminada",
          description: "La subcategoría ha sido eliminada correctamente",
        });
        
        fetchSubcategorias();
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    }
  };

  const handleOpenAdminDialog = () => {
    setNombreAdmin('');
    setCorreoAdmin('');
    setPasswordAdmin('');
    setRolAdmin('editor');
    setAdminOpen(true);
  };

  const handleCloseAdminDialog = () => {
    setAdminOpen(false);
    setNombreAdmin('');
    setCorreoAdmin('');
    setPasswordAdmin('');
    setRolAdmin('editor');
  };

  const handleSubmitAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombreAdmin || !correoAdmin || !passwordAdmin) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor complete todos los campos",
      });
      return;
    }
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: correoAdmin,
        password: passwordAdmin,
        options: {
          data: {
            name: nombreAdmin,
            role: rolAdmin
          }
        }
      });
      
      if (authError) throw authError;
      
      if (!authData.user) {
        throw new Error('No se pudo crear el usuario');
      }
      
      const { error: adminError } = await supabase
        .from('administradores')
        .insert({
          id: authData.user.id,
          nombre: nombreAdmin,
          correo: correoAdmin,
          rol: rolAdmin
        });
        
      if (adminError) {
        console.error("Error al crear administrador:", adminError);
        throw adminError;
      }
      
      toast({
        title: "Administrador creado",
        description: "El administrador ha sido creado exitosamente",
      });
      
      handleCloseAdminDialog();
      fetchAdministradores();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleDeleteAdmin = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este administrador?')) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user.id === id) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "No puedes eliminarte a ti mismo",
          });
          return;
        }
        
        const { error } = await supabase
          .from('administradores')
          .delete()
          .eq('id', id);
          
        if (error) throw error;
        
        toast({
          title: "Administrador eliminado",
          description: "El administrador ha sido eliminado correctamente",
        });
        
        fetchAdministradores();
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">Gestiona las categorías, subcategorías y administradores del sistema.</p>
      </div>
      
      <Tabs defaultValue="categorias" className="space-y-4">
        <TabsList>
          <TabsTrigger value="categorias">Categorías</TabsTrigger>
          <TabsTrigger value="subcategorias">Subcategorías</TabsTrigger>
          <TabsTrigger value="administradores">Administradores</TabsTrigger>
        </TabsList>
        
        <TabsContent value="categorias" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Categorías</h2>
            <Button onClick={() => handleOpenCategoriaDialog()} className="bg-supercopa-gold hover:bg-amber-600">
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
              <Button onClick={() => handleOpenCategoriaDialog()} variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Crear la primera categoría
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
                      <TableCell className="font-medium">{categoria.nombre}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenCategoriaDialog(categoria)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteCategoria(categoria.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="subcategorias" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Subcategorías</h2>
            <Button 
              onClick={() => handleOpenSubcategoriaDialog()} 
              className="bg-supercopa-gold hover:bg-amber-600"
              disabled={categorias.length === 0}
            >
              <Plus className="mr-2 h-4 w-4" /> Nueva Subcategoría
            </Button>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-supercopa-gold"></div>
            </div>
          ) : categorias.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <p className="text-muted-foreground mb-4">Debes crear categorías antes de poder crear subcategorías</p>
              <Button onClick={() => handleOpenCategoriaDialog()} variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Crear la primera categoría
              </Button>
            </div>
          ) : subcategorias.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <p className="text-muted-foreground mb-4">No hay subcategorías registradas</p>
              <Button onClick={() => handleOpenSubcategoriaDialog()} variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Crear la primera subcategoría
              </Button>
            </div>
          ) : (
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subcategorias.map((subcategoria: any) => (
                    <TableRow key={subcategoria.id}>
                      <TableCell className="font-medium">{subcategoria.nombre}</TableCell>
                      <TableCell>{subcategoria.categoria?.nombre || '—'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenSubcategoriaDialog(subcategoria)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteSubcategoria(subcategoria.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="administradores" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Administradores</h2>
            <Button onClick={handleOpenAdminDialog} className="bg-supercopa-gold hover:bg-amber-600">
              <Plus className="mr-2 h-4 w-4" /> Nuevo Administrador
            </Button>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-supercopa-gold"></div>
            </div>
          ) : administradores.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <p className="text-muted-foreground mb-4">No hay administradores registrados</p>
              <Button onClick={handleOpenAdminDialog} variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Crear el primer administrador
              </Button>
            </div>
          ) : (
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Correo</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {administradores.map((admin) => (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">{admin.nombre}</TableCell>
                      <TableCell>{admin.correo}</TableCell>
                      <TableCell>
                        {admin.rol === 'admin' ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Administrador
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Editor
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleDeleteAdmin(admin.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      <Dialog open={categoriaOpen} onOpenChange={setCategoriaOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditingCategoria ? 'Editar Categoría' : 'Nueva Categoría'}</DialogTitle>
            <DialogDescription>
              {isEditingCategoria ? 'Modifica los datos de la categoría' : 'Completa los datos para crear una nueva categoría'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitCategoria}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre_categoria">Nombre de la Categoría</Label>
                <Input
                  id="nombre_categoria"
                  value={nombreCategoria}
                  onChange={(e) => setNombreCategoria(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseCategoriaDialog}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-supercopa-gold hover:bg-amber-600">
                {isEditingCategoria ? 'Actualizar' : 'Crear'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <Dialog open={subcategoriaOpen} onOpenChange={setSubcategoriaOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditingSubcategoria ? 'Editar Subcategoría' : 'Nueva Subcategoría'}</DialogTitle>
            <DialogDescription>
              {isEditingSubcategoria ? 'Modifica los datos de la subcategoría' : 'Completa los datos para crear una nueva subcategoría'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitSubcategoria}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="categoria">Categoría</Label>
                <Select value={categoriaId} onValueChange={setCategoriaId} required>
                  <SelectTrigger id="categoria">
                    <SelectValue placeholder="Seleccionar categoría" />
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
              <div className="grid gap-2">
                <Label htmlFor="nombre_subcategoria">Nombre de la Subcategoría</Label>
                <Input
                  id="nombre_subcategoria"
                  value={nombreSubcategoria}
                  onChange={(e) => setNombreSubcategoria(e.target.value)}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseSubcategoriaDialog}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-supercopa-gold hover:bg-amber-600">
                {isEditingSubcategoria ? 'Actualizar' : 'Crear'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nuevo Administrador</DialogTitle>
            <DialogDescription>
              Crea un nuevo usuario con acceso al panel de administración
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitAdmin}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre_admin">Nombre</Label>
                <Input
                  id="nombre_admin"
                  value={nombreAdmin}
                  onChange={(e) => setNombreAdmin(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="correo_admin">Correo Electrónico</Label>
                <Input
                  id="correo_admin"
                  type="email"
                  value={correoAdmin}
                  onChange={(e) => setCorreoAdmin(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password_admin">Contraseña</Label>
                <Input
                  id="password_admin"
                  type="password"
                  value={passwordAdmin}
                  onChange={(e) => setPasswordAdmin(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rol_admin">Rol</Label>
                <Select value={rolAdmin} onValueChange={setRolAdmin} required>
                  <SelectTrigger id="rol_admin">
                    <SelectValue placeholder="Seleccionar rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleCloseAdminDialog}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-supercopa-gold hover:bg-amber-600">
                Crear Administrador
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfiguracionAdmin;
