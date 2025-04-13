import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, User, Users, CheckCircle2, Trophy, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const Registro = () => {
  const [activeTab, setActiveTab] = useState("juvenil");
  const [numJugadores, setNumJugadores] = useState('');
  const [jugadoresArray, setJugadoresArray] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    nombreEquipo: '',
    numIntegrantes: '',
    nombreCapitan: '',
    telefonoContacto: '+52 ',
    email: '',
    categoria: '',
    genero: 'varonil',
    jugadores: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleJugadorChange = (index: number, value: string) => {
    const newJugadores = [...formData.jugadores];
    newJugadores[index] = value;
    setFormData({
      ...formData,
      jugadores: newJugadores
    });
  };

  const handleNumJugadoresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setNumJugadores(inputValue);

    const num = parseInt(inputValue);
    if (!isNaN(num) && num >= 7 && num <= 20) {
      const newJugadoresArray = Array(num).fill('');
      if (formData.jugadores.length > 0) {
        for (let i = 0; i < Math.min(num, formData.jugadores.length); i++) {
          newJugadoresArray[i] = formData.jugadores[i] || '';
        }
      }
      
      setJugadoresArray(newJugadoresArray);
      setFormData({
        ...formData,
        numIntegrantes: inputValue,
        jugadores: newJugadoresArray
      });
    } else {
      setJugadoresArray([]);
      setFormData({
        ...formData,
        numIntegrantes: inputValue,
        jugadores: []
      });
    }
  };

  const handleGeneroChange = (value: string) => {
    setFormData({
      ...formData,
      genero: value
    });
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (!value.startsWith('+52 ')) {
      value = '+52 ' + value.replace('+52 ', '');
    }
    
    setFormData({
      ...formData,
      telefonoContacto: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const numPlayers = parseInt(formData.numIntegrantes as string);
    if (isNaN(numPlayers) || numPlayers < 7 || numPlayers > 20) {
      toast({
        title: "Error en el formulario",
        description: "El número de jugadores debe ser entre 7 y 20.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.jugadores.some(jugador => !jugador) || formData.jugadores.length < 7) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa el nombre de todos los jugadores.",
        variant: "destructive"
      });
      return;
    }

    console.log('Datos del equipo:', formData);
    toast({
      title: "Registro Exitoso!",
      description: "El equipo ha sido registrado correctamente en la SuperCopa Mex.",
    });
  };

  return (
    <Layout>
      <section className="relative py-28 bg-supercopa-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624526267942-ab0c0e53d0e3?q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-40"></div>

        <div className="relative container mx-auto px-4 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Registro <span className="text-supercopa-gold">SuperCopa</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Inscríbete y forma parte de la experiencia SuperCopa Mex.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">¡Registra a tu equipo!</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Completa el formulario para inscribir a tu equipo en la categoría correspondiente.
          </p>

          <Tabs defaultValue="juvenil" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <div className="mb-8 flex justify-center">
              <TabsList className="grid grid-cols-2 w-full max-w-xl">
                <TabsTrigger value="juvenil" className="flex items-center justify-center gap-2">
                  <User size={activeTab === "juvenil" ? 18 : 16} className={activeTab === "juvenil" ? "text-supercopa-gold" : ""} />
                  <span>Categoría Juvenil</span>
                </TabsTrigger>
                <TabsTrigger value="infantil" className="flex items-center justify-center gap-2">
                  <Users size={activeTab === "infantil" ? 18 : 16} className={activeTab === "infantil" ? "text-supercopa-gold" : ""} />
                  <span>Categoría Infantil</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="juvenil" className="animate-fade-in">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-supercopa-navy">Registro de Equipo - Categoría Juvenil</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nombreEquipo">Nombre del Equipo</Label>
                        <Input
                          id="nombreEquipo"
                          name="nombreEquipo"
                          value={formData.nombreEquipo}
                          onChange={handleChange}
                          placeholder="Nombre del equipo"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="numIntegrantes">Número de Jugadores</Label>
                        <Input
                          id="numIntegrantes"
                          name="numIntegrantes"
                          type="number"
                          min="7"
                          max="20"
                          value={numJugadores}
                          onChange={handleNumJugadoresChange}
                          placeholder="Ingrese número (7-20)"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Mínimo: 7, Máximo: 20 jugadores</p>
                      </div>

                      <div>
                        <Label htmlFor="nombreCapitan">Nombre del Capitán</Label>
                        <Input
                          id="nombreCapitan"
                          name="nombreCapitan"
                          value={formData.nombreCapitan}
                          onChange={handleChange}
                          placeholder="Nombre completo"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="telefonoContacto">Teléfono de Contacto</Label>
                        <Input
                          id="telefonoContacto"
                          name="telefonoContacto"
                          value={formData.telefonoContacto}
                          onChange={handlePhoneInputChange}
                          placeholder="+52 (123) 456-7890"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Formato: +52 seguido del número</p>
                      </div>

                      <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ejemplo@correo.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="categoria">Categoría</Label>
                        <select
                          id="categoria"
                          name="categoria"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-supercopa-gold focus:ring-supercopa-gold"
                          value={formData.categoria}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona una categoría</option>
                          <option value="2008-2007">2008-2007</option>
                          <option value="2006-2005">2006-2005</option>
                          <option value="2004-2003">2004-2003</option>
                          <option value="libre">Libre (2002+)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Género</Label>
                      <RadioGroup 
                        defaultValue="varonil"
                        className="flex space-x-4"
                        value={formData.genero}
                        onValueChange={handleGeneroChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="varonil" id="varonil" />
                          <Label htmlFor="varonil">Varonil</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="femenil" id="femenil" />
                          <Label htmlFor="femenil">Femenil</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium">Jugadores</h4>
                      <div className="grid gap-4">
                        {jugadoresArray.length > 0 ? (
                          jugadoresArray.map((_, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <span className="w-8 h-8 flex items-center justify-center bg-supercopa-navy text-white rounded-full">
                                {index + 1}
                              </span>
                              <Input
                                placeholder={`Nombre completo del jugador ${index + 1}`}
                                value={formData.jugadores[index] || ''}
                                onChange={(e) => handleJugadorChange(index, e.target.value)}
                                required
                              />
                            </div>
                          ))
                        ) : (
                          <p className="text-amber-600">
                            Ingrese el número de jugadores (entre 7 y 20) para mostrar los campos de jugadores.
                          </p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-supercopa-gold hover:bg-supercopa-gold/90 text-white">
                      Registrar Equipo
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="infantil" className="animate-fade-in">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-supercopa-navy">Registro de Equipo - Categoría Infantil</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="nombreEquipoInfantil">Nombre del Equipo</Label>
                        <Input
                          id="nombreEquipoInfantil"
                          name="nombreEquipo"
                          value={formData.nombreEquipo}
                          onChange={handleChange}
                          placeholder="Nombre del equipo"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="numIntegrantesInfantil">Número de Jugadores</Label>
                        <Input
                          id="numIntegrantesInfantil"
                          name="numIntegrantes"
                          type="number"
                          min="7"
                          max="20"
                          value={numJugadores}
                          onChange={handleNumJugadoresChange}
                          placeholder="Ingrese número (7-20)"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Mínimo: 7, Máximo: 20 jugadores</p>
                      </div>

                      <div>
                        <Label htmlFor="nombreCapitanInfantil">Nombre del Responsable</Label>
                        <Input
                          id="nombreCapitanInfantil"
                          name="nombreCapitan"
                          value={formData.nombreCapitan}
                          onChange={handleChange}
                          placeholder="Nombre completo"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="telefonoContactoInfantil">Teléfono de Contacto</Label>
                        <Input
                          id="telefonoContactoInfantil"
                          name="telefonoContacto"
                          value={formData.telefonoContacto}
                          onChange={handlePhoneInputChange}
                          placeholder="+52 (123) 456-7890"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">Formato: +52 seguido del número</p>
                      </div>

                      <div>
                        <Label htmlFor="emailInfantil">Correo Electrónico</Label>
                        <Input
                          id="emailInfantil"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ejemplo@correo.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="categoriaInfantil">Categoría</Label>
                        <select
                          id="categoriaInfantil"
                          name="categoria"
                          className="w-full rounded-md border border-gray-300 py-2 px-3 focus:border-supercopa-gold focus:ring-supercopa-gold"
                          value={formData.categoria}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona una categoría</option>
                          <option value="2013-2008">2013-2008</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Género</Label>
                      <RadioGroup 
                        defaultValue="varonil"
                        className="flex space-x-4"
                        value={formData.genero}
                        onValueChange={handleGeneroChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="varonil" id="varonilInfantil" />
                          <Label htmlFor="varonilInfantil">Varonil</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="femenil" id="femenilInfantil" />
                          <Label htmlFor="femenilInfantil">Femenil</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-md font-medium">Jugadores</h4>
                      <div className="grid gap-4">
                        {jugadoresArray.length > 0 ? (
                          jugadoresArray.map((_, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <span className="w-8 h-8 flex items-center justify-center bg-supercopa-navy text-white rounded-full">
                                {index + 1}
                              </span>
                              <Input
                                placeholder={`Nombre completo del jugador ${index + 1}`}
                                value={formData.jugadores[index] || ''}
                                onChange={(e) => handleJugadorChange(index, e.target.value)}
                                required
                              />
                            </div>
                          ))
                        ) : (
                          <p className="text-amber-600">
                            Ingrese el número de jugadores (entre 7 y 20) para mostrar los campos de jugadores.
                          </p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-supercopa-gold hover:bg-supercopa-gold/90 text-white">
                      Registrar Equipo
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Beneficios de Registrarte</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Al registrarte en la SuperCopa Mex, obtienes acceso a múltiples beneficios y oportunidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Participación Garantizada</h3>
              <p className="text-gray-600">
                Asegura tu lugar en uno de los torneos de fútbol juvenil más emocionantes de México.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Trophy className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Oportunidad de Destacar</h3>
              <p className="text-gray-600">
                Muestra tus habilidades y compite al más alto nivel para ser reconocido por ojeadores y clubes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MapPin className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Experiencia Inolvidable</h3>
              <p className="text-gray-600">
                Vive momentos únicos, conoce nuevos amigos y disfruta de un ambiente de competencia sana y divertida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-supercopa-navy to-supercopa-navy/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¡No te quedes fuera de la SuperCopa Mex!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Regístrate ahora y asegura tu participación en la próxima edición del torneo.
          </p>
          <Button className="bg-supercopa-gold hover:bg-supercopa-gold/90 text-white text-lg px-8 py-6">
            ¡Regístrate Ahora!
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Registro;
