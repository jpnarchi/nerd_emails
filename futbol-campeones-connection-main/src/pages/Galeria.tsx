
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Flame, Image, Trophy, CalendarDays } from 'lucide-react';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState("edition3");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });

  const openImage = (image: { src: string; alt: string }) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const galleryImages = {
    edition3: [
      { 
        src: "/lovable-uploads/88b71b9b-7e62-414c-92d5-b771ab4555c7.png", 
        alt: "Jugador con balón de fútbol", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/4f5b6e72-2a6f-491a-a714-64bfab24fffa.png", 
        alt: "Equipo de fútbol sentado en la cancha", 
        category: "highlights" 
      },
      { 
        src: "/lovable-uploads/640a3140-b728-4400-a26e-c8cb3be5987e.png", 
        alt: "Jugador con camiseta azul controlando el balón", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/b563585e-37d7-47e9-aae0-306215b8f8cd.png", 
        alt: "Jugador pateando el balón", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/2184d032-7cb8-4d16-9d3f-975451b02148.png", 
        alt: "Jugador con camiseta 'Salsa' a punto de patear", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/8891dcdf-37dc-48c4-91e1-70c3c4475172.png", 
        alt: "Jugador con camiseta rosa en la cancha", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/4117c8af-8aaf-415f-a847-f7162c357cf1.png", 
        alt: "Jugador con camiseta azul 'Fede' a punto de patear", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/87eff583-2526-480a-a7ab-3a73a5ca2d30.png", 
        alt: "Abrazo entre jugadores celebrando", 
        category: "highlights" 
      },
      { 
        src: "/lovable-uploads/d7a2a60f-ba31-4a2e-963d-f5cde0df2c8d.png", 
        alt: "Equipo de futbol en círculo", 
        category: "highlights" 
      },
    ],
    edition2: [
      { 
        src: "/lovable-uploads/b853514d-b45a-4411-bb1c-444adf74d91f.png", 
        alt: "Celebración de equipo tras victoria", 
        category: "highlights" 
      },
      { 
        src: "/lovable-uploads/19d43ee5-d81f-4ea1-b50b-1d7fe1619c37.png", 
        alt: "Equipo de fútbol con uniforme rojo celebrando", 
        category: "awards" 
      },
      { 
        src: "/lovable-uploads/210868f3-0a66-4762-b051-e8d2c73943a6.png", 
        alt: "Jugadores preparándose para un partido", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/0a1ce1dd-4943-421f-a528-d2ba7bb6c2ba.png", 
        alt: "Jugadores con camiseta Red Bull en la cancha", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/92c9594c-77ed-45e5-9493-f3e8d07c175a.png", 
        alt: "Jugador realizando un tiro", 
        category: "matches" 
      },
      { 
        src: "/lovable-uploads/ff5843f0-283b-40b1-b3ca-6db5df05568c.png", 
        alt: "Celebración de gol en equipo", 
        category: "highlights" 
      },
    ],
    edition1: [
      { 
        src: "/lovable-uploads/ab7809fe-3b2e-46fe-9861-30b12d759d0a.png", 
        alt: "Jugadores de equipo blanco en círculo", 
        category: "highlights" 
      },
      { 
        src: "/lovable-uploads/876d07ab-caeb-4d81-8049-b5a16fe8aa24.png", 
        alt: "Celebración de equipo tras victoria", 
        category: "awards" 
      },
      { 
        src: "/lovable-uploads/5c369a48-a096-4971-9f02-5f5c43b89dd2.png", 
        alt: "Jugadores corriendo en celebración", 
        category: "highlights" 
      },
      { 
        src: "/lovable-uploads/c86ab99a-94c3-4b9c-b152-d290fff87db0.png", 
        alt: "Foto grupal de equipo campeón", 
        category: "awards" 
      },
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-supercopa-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605135693932-c3ebd58cbc96?q=80&w=2069')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        
        <div className="relative container mx-auto px-4 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Galería <span className="text-supercopa-gold">SuperCopa</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Revive los mejores momentos del torneo a través de nuestra galería de imágenes.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Momentos Memorables</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Explora la colección de fotografías que capturan la esencia de la SuperCopa Mex 
            a través de sus distintas ediciones.
          </p>

          <Tabs 
            defaultValue="edition3" 
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="mb-8 flex justify-center">
              <TabsList className="grid grid-cols-3 w-full max-w-xl">
                <TabsTrigger value="edition3" className="flex items-center justify-center gap-2">
                  <CalendarDays size={activeTab === "edition3" ? 18 : 16} className={activeTab === "edition3" ? "text-supercopa-gold" : ""} />
                  <span>3ra Edición</span>
                </TabsTrigger>
                <TabsTrigger value="edition2" className="flex items-center justify-center gap-2">
                  <CalendarDays size={activeTab === "edition2" ? 18 : 16} className={activeTab === "edition2" ? "text-supercopa-gold" : ""} />
                  <span>2da Edición</span>
                </TabsTrigger>
                <TabsTrigger value="edition1" className="flex items-center justify-center gap-2">
                  <CalendarDays size={activeTab === "edition1" ? 18 : 16} className={activeTab === "edition1" ? "text-supercopa-gold" : ""} />
                  <span>1ra Edición</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Filtering options */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button 
                onClick={() => setActiveTab(activeTab)}
                className="px-4 py-2 rounded-full bg-supercopa-navy text-white flex items-center gap-2 hover:bg-supercopa-navy/90"
              >
                <Image size={16} />
                <span>Todas</span>
              </button>
              <button 
                onClick={() => setActiveTab(`${activeTab}_highlights`)}
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 flex items-center gap-2 hover:bg-gray-300"
              >
                <Flame size={16} />
                <span>Destacados</span>
              </button>
              <button 
                onClick={() => setActiveTab(`${activeTab}_matches`)}
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 flex items-center gap-2 hover:bg-gray-300"
              >
                <Trophy size={16} />
                <span>Partidos</span>
              </button>
              <button 
                onClick={() => setActiveTab(`${activeTab}_awards`)}
                className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 flex items-center gap-2 hover:bg-gray-300"
              >
                <CalendarDays size={16} />
                <span>Premiaciones</span>
              </button>
            </div>

            {/* Third Edition Gallery */}
            <TabsContent value="edition3" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition3.map((image, i) => (
                  <div 
                    key={i} 
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => openImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Third Edition Highlights */}
            <TabsContent value="edition3_highlights" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition3
                  .filter(img => img.category === 'highlights')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Third Edition Matches */}
            <TabsContent value="edition3_matches" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition3
                  .filter(img => img.category === 'matches')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Third Edition Awards */}
            <TabsContent value="edition3_awards" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition3
                  .filter(img => img.category === 'awards')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Second Edition Gallery */}
            <TabsContent value="edition2" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition2.map((image, i) => (
                  <div 
                    key={i} 
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => openImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Second Edition Filtered Content */}
            <TabsContent value="edition2_highlights" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition2
                  .filter(img => img.category === 'highlights')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="edition2_matches" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition2
                  .filter(img => img.category === 'matches')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="edition2_awards" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition2
                  .filter(img => img.category === 'awards')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* First Edition Gallery */}
            <TabsContent value="edition1" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition1.map((image, i) => (
                  <div 
                    key={i} 
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => openImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* First Edition Filtered Content */}
            <TabsContent value="edition1_highlights" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition1
                  .filter(img => img.category === 'highlights')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="edition1_matches" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition1
                  .filter(img => img.category === 'matches')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="edition1_awards" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.edition1
                  .filter(img => img.category === 'awards')
                  .map((image, i) => (
                    <div 
                      key={i} 
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                      onClick={() => openImage(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-800 font-medium">{currentImage.alt}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-supercopa-navy to-supercopa-navy/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Sé parte de nuestros próximos recuerdos</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Inscríbete en la 4ta edición y crea momentos inolvidables en la SuperCopa Mex.
          </p>
          <a href="/registro" className="btn-accent text-lg px-8 py-3 inline-block">
            Registra tu Equipo
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Galeria;
