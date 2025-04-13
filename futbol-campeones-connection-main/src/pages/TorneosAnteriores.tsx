
import React from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Calendar, MapPin, Users, Trophy, Award, Star } from 'lucide-react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination";

const TorneosAnteriores = () => {
  const tournaments = [
    {
      edition: "4ta Edición",
      date: "Noviembre 2024",
      participants: 2000,
      attendance: 5000,
      location: "Sporti Valle Poniente",
      champions: [
        { category: "Varonil 2014", team: "Real Monterrey" },
        { category: "Varonil 2012", team: "Halcones FC" },
        { category: "Varonil 2010", team: "Águilas Doradas" },
        { category: "Varonil 2008", team: "Atlético Regio" },
        { category: "Femenil 2014", team: "Tigres Femenil" },
        { category: "Femenil 2012", team: "Leonas Unidas" },
        { category: "Femenil 2010", team: "Águilas Femenil" },
      ],
      sponsors: ["Nature Factory", "Gatorade", "Fud", "Jac n Ray", "Salchichoza", "Half and Half"],
      images: [
        "/lovable-uploads/ff54352b-f5fd-4577-9bab-085e3dff02fe.png",
        "/lovable-uploads/003a1a31-f3f2-4672-baa3-551cf5b16f5a.png",
      ],
      highlights: "Récord de participación con 2000 jugadores y asistencia de más de 5000 personas diarias."
    },
    {
      edition: "3ra Edición",
      date: "Mayo 2024",
      participants: 1300,
      attendance: 4000,
      location: "SupercopaMex by Nature Factory",
      champions: [
        { category: "Varonil 2012", team: "Halcones FC" },
        { category: "Varonil 2010", team: "Águilas Doradas" },
        { category: "Varonil 2008", team: "Real Monterrey" },
        { category: "Femenil 2012", team: "Leonas Unidas" },
        { category: "Femenil 2010", team: "Águilas Femenil" },
      ],
      sponsors: ["Nature Factory", "Gatorade", "Fud", "Jac n Ray", "Salchichoza", "Half and Half"],
      images: [
        "/lovable-uploads/ff54352b-f5fd-4577-9bab-085e3dff02fe.png",
        "/lovable-uploads/003a1a31-f3f2-4672-baa3-551cf5b16f5a.png",
        "/lovable-uploads/5544209a-0abf-4434-bc4b-dd5186f5cdfb.png",
      ],
      highlights: "Récord de asistencia con más de 4000 personas diarias. Participación de equipos internacionales."
    },
    {
      edition: "2da Edición",
      date: "Noviembre 2023",
      participants: 700,
      attendance: 1300,
      location: "Sporti Valle Poniente",
      champions: [
        { category: "Varonil 2012", team: "Real Monterrey" },
        { category: "Varonil 2010", team: "Lobos Unidos" },
        { category: "Varonil 2008", team: "Atlético Regio" },
        { category: "Femenil 2012", team: "Leonas Unidas" },
      ],
      sponsors: ["Powerade", "Sporti", "Elotes Don Fede", "Churros Toño"],
      images: [
        "/lovable-uploads/b563585e-37d7-47e9-aae0-306215b8f8cd.png",
        "/lovable-uploads/f7a3b660-f207-4807-b448-b8c9c11c8272.png",
      ],
      highlights: "Cena de campeones en Skin Joint. Aumento significativo de equipos participantes."
    },
    {
      edition: "1ra Edición",
      date: "Marzo 2023",
      participants: 250,
      attendance: 500,
      location: "Sporti Valle Poniente",
      champions: [
        { category: "Varonil 2012", team: "Halcones FC" },
        { category: "Varonil 2010", team: "Deportivo Azteca" },
        { category: "Varonil 2008", team: "Tigres Blancos" },
      ],
      sponsors: ["Sporti", "Burritos Lulu"],
      images: [
        "/lovable-uploads/0a1ce1dd-4943-421f-a528-d2ba7bb6c2ba.png",
      ],
      highlights: "Primera edición del torneo que marcó el inicio del proyecto SuperCopa Mex."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-supercopa-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/b853514d-b45a-4411-bb1c-444adf74d91f.png')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        
        <div className="relative container mx-auto px-4 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Torneos <span className="text-supercopa-gold">Anteriores</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Revive los mejores momentos de las ediciones pasadas de la SuperCopa Mex.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Nuestra Trayectoria</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Desde nuestra primera edición en 2023, hemos crecido constantemente en participación, 
            asistencia y calidad deportiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tournament.images[0]} 
                    alt={`${tournament.edition} SuperCopa Mex`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-supercopa-navy/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-bold">{tournament.edition}</h3>
                    <div className="flex items-center text-supercopa-gold mt-1">
                      <Calendar size={16} className="mr-1" />
                      <span>{tournament.date}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start">
                      <Users size={18} className="text-supercopa-gold mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Participantes</p>
                        <p className="font-semibold">{tournament.participants}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users size={18} className="text-supercopa-gold mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Asistencia</p>
                        <p className="font-semibold">{tournament.attendance}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <MapPin size={18} className="text-supercopa-gold mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Sede</p>
                      <p className="font-semibold">{tournament.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 border-t pt-4">{tournament.highlights}</p>
                </CardContent>
                <CardFooter className="flex justify-end pt-0">
                  <a 
                    href={`#tournament-${index}`} 
                    className="text-supercopa-navy hover:text-supercopa-gold font-medium flex items-center gap-1"
                  >
                    Ver detalles
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Tournament Sections */}
      {tournaments.map((tournament, index) => (
        <section 
          id={`tournament-${index}`} 
          key={`detail-${index}`} 
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - Info */}
              <div className="md:w-1/2">
                <div className="sticky top-24">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-supercopa-gold text-supercopa-navy flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h2 className="text-3xl font-bold text-supercopa-navy">{tournament.edition}</h2>
                  </div>
                  
                  <div className="flex items-center text-supercopa-gold gap-2 mb-6">
                    <Calendar size={20} />
                    <span className="text-lg">{tournament.date}</span>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h3 className="text-xl font-semibold text-supercopa-navy mb-4">Información General</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <Users size={20} className="text-supercopa-gold mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Participantes</p>
                          <p className="font-semibold">{tournament.participants} jugadores</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users size={20} className="text-supercopa-gold mr-2 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-500">Asistencia</p>
                          <p className="font-semibold">{tournament.attendance} personas</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-6">
                      <MapPin size={20} className="text-supercopa-gold mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Sede</p>
                        <p className="font-semibold">{tournament.location}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-supercopa-navy mb-2 flex items-center">
                        <Award size={20} className="text-supercopa-gold mr-2" />
                        Destacados
                      </h4>
                      <p className="text-gray-700">{tournament.highlights}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-supercopa-navy mb-4 flex items-center">
                      <Trophy size={20} className="text-supercopa-gold mr-2" />
                      Campeones
                    </h3>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Categoría</TableHead>
                          <TableHead>Equipo Campeón</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tournament.champions.map((champion, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{champion.category}</TableCell>
                            <TableCell className="font-medium">{champion.team}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              
              {/* Right side - Gallery & Sponsors */}
              <div className="md:w-1/2">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-supercopa-navy mb-2">Galería</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {tournament.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={image} 
                          alt={`${tournament.edition} SuperCopa Mex ${imgIndex + 1}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                    <h3 className="text-xl font-semibold text-supercopa-navy mb-4">Patrocinadores</h3>
                    <div className="flex flex-wrap gap-2">
                      {tournament.sponsors.map((sponsor, spIndex) => (
                        <span key={spIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {sponsor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          {index < tournaments.length - 1 && (
            <div className="mt-12 text-center">
              <a 
                href={`#tournament-${index + 1}`}
                className="inline-flex items-center gap-2 text-supercopa-navy hover:text-supercopa-gold transition-colors"
              >
                Ver siguiente edición
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-subtle">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </a>
            </div>
          )}
        </section>
      ))}

      {/* Growth Section */}
      <section className="py-16 bg-supercopa-navy text-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center" className="text-white">Nuestro Crecimiento</SectionTitle>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            La Supercopa Mex ha experimentado un crecimiento constante en cada edición, 
            gracias al apoyo de patrocinadores y colaboraciones estratégicas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-5xl font-bold text-supercopa-gold mb-3">520%</h3>
              <p className="text-lg text-white font-medium mb-2">Crecimiento en Jugadores</p>
              <p className="text-gray-300">De 250 a 1300 jugadores en tres ediciones</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-5xl font-bold text-supercopa-gold mb-3">800%</h3>
              <p className="text-lg text-white font-medium mb-2">Crecimiento en Asistencia</p>
              <p className="text-gray-300">De 500 a 4000 personas por día</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-5xl font-bold text-supercopa-gold mb-3">300%</h3>
              <p className="text-lg text-white font-medium mb-2">Más Patrocinadores</p>
              <p className="text-gray-300">Mayor apoyo y confianza de empresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <Pagination>
            <PaginationContent>
              {tournaments.map((_, idx) => (
                <PaginationItem key={idx}>
                  <PaginationLink href={`#tournament-${idx}`} isActive={idx === 0}>
                    {idx + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Next Edition CTA */}
      <section className="py-16 bg-gradient-to-r from-supercopa-navy to-supercopa-navy/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prepárate para la 4ta Edición</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            22-24 de Noviembre del 2024 en Sporti Valle Poniente. ¡No te lo pierdas!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/registro" className="btn-accent text-lg px-8 py-3">
              Registra tu Equipo
            </a>
            <a href="/galeria" className="btn-primary text-lg px-8 py-3">
              Ver Galería
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TorneosAnteriores;
