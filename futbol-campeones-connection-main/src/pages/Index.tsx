
import React from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { ChevronDown, Calendar, Users, Award, Target, Smile, MapPin } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-supercopa-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
        
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ebda6efc-22d0-488a-bf4a-d9d86b036851.png')] bg-cover bg-center bg-no-repeat"></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-20">
          <img 
            src="/lovable-uploads/b3cc060b-9f29-47a4-be9a-7eba29ca10ab.png" 
            alt="SuperCopa Mex Logo" 
            className="w-32 md:w-40 mb-6 animate-fade-in bg-transparent"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            SuperCopa <span className="text-supercopa-gold">Mex</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Elevando el nivel del fútbol en México desde 2023
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a href="/registro" className="btn-accent text-lg px-8 py-3">
              REGISTRATE
            </a>
            <a href="#about" className="btn-primary text-lg px-8 py-3">
              Conócenos
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-subtle">
          <a href="#about" className="text-white hover:text-supercopa-gold transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section with Updated Image */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle>¿Quiénes Somos?</SectionTitle>
              <p className="text-gray-700 mb-6">
                Somos un conjunto de 5 estudiantes que en Marzo del 2023, nos embarcamos en una apasionante 
                travesía con el objetivo de elevar el nivel del futbol en México, e influir la amistad a 
                través del deporte.
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-medium">Carlos Lozano, Gabriel Elizondo, Patricio Jaime, Bernardo Guerra y Federico Lozano</span> 
                fundaron este proyecto con pasión y dedicación.
              </p>
              <div className="mt-8">
                <a href="/registro" className="btn-primary inline-block">
                  Únete a Nosotros
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-supercopa-gold rounded-lg"></div>
                <img 
                  src="/lovable-uploads/f21b3444-b15d-43b6-aa67-290821a40722.png" 
                  alt="Jugadores SuperCopa"
                  className="relative z-10 rounded-lg shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights Carousel - NEW SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Momentos Destacados</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Capturamos los mejores momentos de nuestros torneos, donde los jugadores demuestran su pasión y talento.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/ff54352b-f5fd-4577-9bab-085e3dff02fe.png" 
                      alt="Jugador en acción" 
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/003a1a31-f3f2-4672-baa3-551cf5b16f5a.png" 
                      alt="Jugador con balón" 
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/5544209a-0abf-4434-bc4b-dd5186f5cdfb.png" 
                      alt="Jugadores con balón" 
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Nuestro Objetivo</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            La Supercopa Mex busca identificar y destacar a los jugadores más sobresalientes, 
            ofreciendo oportunidades para su desarrollo y proyección.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Identificar Talento</h3>
              <p className="text-gray-600">
                Destacar a los jugadores más sobresalientes y ofrecerles la oportunidad 
                de ser considerados por equipos de mayor prestigio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Target className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Desarrollo Continuo</h3>
              <p className="text-gray-600">
                Servir como plataforma para el desarrollo continuo de las habilidades de los 
                jugadores, aspirando a alcanzar los niveles más altos de competición.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="bg-supercopa-navy/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Smile className="text-supercopa-navy" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-supercopa-navy">Ambiente Divertido</h3>
              <p className="text-gray-600">
                Promover un ambiente divertido donde los niños puedan disfrutar de la emoción 
                de competir mientras desarrollan sus habilidades futbolísticas.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/resultados" className="btn-primary">Ver Resultados</a>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle>Historia</SectionTitle>
          <p className="text-gray-700 mb-12 max-w-4xl">
            El proyecto de la Supercopa comenzó en Marzo 2023 con la primer edición, 
            con el propósito de promover la diversión y la pasión por el fútbol.
          </p>
          
          <div className="space-y-12">
            <div className="relative">
              {/* Line connector */}
              <div className="absolute left-[15px] md:left-[39px] top-[36px] bottom-0 w-[2px] bg-supercopa-gold/50 z-0"></div>
              
              <div className="flex items-start">
                <div className="bg-supercopa-gold text-supercopa-navy font-bold rounded-full w-8 h-8 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-10">
                  <Calendar className="hidden md:block" size={24} />
                  <span className="md:hidden">1</span>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-supercopa-navy">Primer Edición - Marzo 2023</h3>
                  <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <img 
                        src="/lovable-uploads/f21b3444-b15d-43b6-aa67-290821a40722.png" 
                        alt="Primera edición" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>250 jugadores participantes</span>
                        </li>
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>500 personas por día asistentes al evento</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin size={20} className="text-supercopa-gold mr-2" />
                          <span>Sporti Valle Poniente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Line connector */}
              <div className="absolute left-[15px] md:left-[39px] top-[36px] bottom-0 w-[2px] bg-supercopa-gold/50 z-0"></div>
              
              <div className="flex items-start">
                <div className="bg-supercopa-gold text-supercopa-navy font-bold rounded-full w-8 h-8 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-10">
                  <Calendar className="hidden md:block" size={24} />
                  <span className="md:hidden">2</span>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-supercopa-navy">Segunda Edición - Noviembre 2023</h3>
                  <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <img 
                        src="/lovable-uploads/f7a3b660-f207-4807-b448-b8c9c11c8272.png" 
                        alt="Segunda edición" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>700 jugadores participantes</span>
                        </li>
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>1300 personas por día asistentes al torneo</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin size={20} className="text-supercopa-gold mr-2" />
                          <span>Sporti Valle Poniente</span>
                        </li>
                        <li className="mt-2">
                          <p className="font-medium text-supercopa-navy">Evento especial:</p>
                          <p>Cena de campeones en Skin Joint</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Line connector */}
              <div className="absolute left-[15px] md:left-[39px] top-[36px] bottom-0 w-[2px] bg-supercopa-gold/50 z-0"></div>
              
              <div className="flex items-start">
                <div className="bg-supercopa-gold text-supercopa-navy font-bold rounded-full w-8 h-8 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-10">
                  <Calendar className="hidden md:block" size={24} />
                  <span className="md:hidden">3</span>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-supercopa-navy">Tercera Edición - Mayo 2024</h3>
                  <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <img 
                        src="/lovable-uploads/19123def-492a-4e35-ad09-8c5a1d50897b.png" 
                        alt="Tercera edición" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>1300 jugadores participantes</span>
                        </li>
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>Más de 4000 personas asistentes diarias</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin size={20} className="text-supercopa-gold mr-2" />
                          <span>SupercopaMex by Nature Factory</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-start">
                <div className="bg-supercopa-gold text-supercopa-navy font-bold rounded-full w-8 h-8 md:w-20 md:h-20 flex items-center justify-center shrink-0 z-10">
                  <Calendar className="hidden md:block" size={24} />
                  <span className="md:hidden">4</span>
                </div>
                <div className="ml-4 md:ml-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-supercopa-navy">Cuarta Edición - Noviembre 2024</h3>
                  <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <img 
                        src="/lovable-uploads/19123def-492a-4e35-ad09-8c5a1d50897b.png" 
                        alt="Cuarta edición" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>2000 jugadores participantes</span>
                        </li>
                        <li className="flex items-center">
                          <Users size={20} className="text-supercopa-gold mr-2" />
                          <span>5000 personas asistentes diarias</span>
                        </li>
                        <li className="flex items-center">
                          <MapPin size={20} className="text-supercopa-gold mr-2" />
                          <span>Sporti Valle Poniente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximo Torneo */}
      <section className="py-20 bg-supercopa-navy text-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center" className="text-white after:bg-supercopa-gold">1ra Edición Supercopa Juvenil</SectionTitle>
          
          <div className="bg-supercopa-navy/50 backdrop-blur-sm border border-supercopa-gold/20 rounded-xl p-8 max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Fecha</h4>
                  <p className="text-xl">22-24 de Marzo del 2025</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Lugar</h4>
                  <p className="text-xl">Sporti Valle Poniente</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Participación Estimada</h4>
                  <p className="text-xl">1000 jugadores</p>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Asistencia Esperada</h4>
                  <p className="text-xl">3000 personas</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Categorías</h4>
                  <p className="text-xl">Sub-17 y Sub-20 varonil y femenil</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-supercopa-gold font-medium mb-2">Ambiente</h4>
                  <p>Primera edición juvenil con competencia del más alto nivel para proyectar talento.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/registro" className="btn-accent text-lg px-8 py-3">
                Regístrate Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Area Común */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/0fa486a1-1f93-4f58-82dd-f4dfa0fd975e.png" 
                alt="Área Común SuperCopa" 
                className="rounded-lg shadow-xl object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <SectionTitle>Área Común</SectionTitle>
              <p className="text-gray-700 mb-6">
                Contamos con un área común con restaurantes y snacks. Hemos tenido restaurantes como 
                Jac n Ray, Salchichoza, Half and Half, Elotes don fede, Churros Toño, Fud, Nature Factory, 
                Burritos Lulu etc. 
              </p>
              <p className="text-gray-700 mb-6">
                Aparte nosotros manejamos la vendimia de aguas, powerades, gatorade, refresco y papas.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-supercopa-navy mb-3">Crecimiento</h4>
                <p className="text-gray-700">
                  La Supercopa Mex ha experimentado un crecimiento constante en cada edición, 
                  gracias al apoyo de patrocinadores y colaboraciones estratégicas. Estos aliados 
                  han permitido mejorar la calidad del torneo, atraer a más equipos y ofrecer 
                  mejores premios y experiencias a los participantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-supercopa-navy to-supercopa-navy/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para unirte a la SuperCopa Mex?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Sé parte de la historia en la 4ta Edición del torneo más emocionante de fútbol juvenil en México.
          </p>
          <a href="/registro" className="btn-accent text-lg px-8 py-3 inline-block animate-pulse-slow">
            REGISTRATE AHORA
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
