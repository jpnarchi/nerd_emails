import React from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { Heart, Check } from 'lucide-react';

const Patrocinadores = () => {
  const sponsors = [
    { name: "Circa.ofc", logo: "https://placehold.co/240x120/DCAC4B/0A1E3C?text=Circa.ofc", level: "platinum" },
    { name: "Cosmo", logo: "https://placehold.co/240x120/E0E0E0/0A1E3C?text=Cosmo", level: "gold" },
    { name: "Acosta Verde", logo: "https://placehold.co/240x120/E0E0E0/0A1E3C?text=Acosta+Verde", level: "gold" },
    { name: "Acre", logo: "https://placehold.co/240x120/E0E0E0/0A1E3C?text=Acre", level: "gold" },
    { name: "Emblem Capital", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Emblem+Capital", level: "silver" },
    { name: "Gilsa", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Gilsa", level: "silver" },
    { name: "Innova Sports", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Innova+Sports", level: "silver" },
    { name: "RC Joyería", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=RC+Joyería", level: "silver" },
    { name: "Perfume Plug", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Perfume+Plug", level: "silver" },
    { name: "Gown Town", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Gown+Town", level: "silver" },
    { name: "MTN Bites", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=MTN+Bites", level: "silver" },
    { name: "Local 6 TV", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Local+6+TV", level: "silver" },
    { name: "Loreto Villarreal", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Loreto+Villarreal", level: "silver" },
    { name: "Hatxa", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=Hatxa", level: "silver" },
    { name: "La Gran Barra", logo: "https://placehold.co/240x120/F8F9FA/0A1E3C?text=La+Gran+Barra", level: "silver" },
  ];

  const sponsorBenefits = {
    platinum: [
      "Logo prominente en todos los materiales promocionales",
      "Banner principal en todas las instalaciones del torneo",
      "Menciones exclusivas en redes sociales",
      "Stand promocional premium",
      "Presentación del trofeo en la final",
      "Logo en uniformes oficiales",
      "Acceso VIP a todos los eventos",
      "Entrevistas exclusivas con jugadores destacados",
    ],
    gold: [
      "Logo en materiales promocionales seleccionados",
      "Banner en áreas clave del torneo",
      "Menciones en redes sociales",
      "Stand promocional estándar",
      "Presencia en ceremonia de premiación",
      "Acceso a eventos especiales",
    ],
    silver: [
      "Logo en la web oficial",
      "Banner en una ubicación del torneo",
      "Menciones en redes sociales",
      "Espacio para promoción de productos",
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-supercopa-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-supercopa-navy/95 to-supercopa-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540320868146-bc60dd979017?q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        
        <div className="relative container mx-auto px-4 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Nuestros <span className="text-supercopa-gold">Patrocinadores</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Aliados estratégicos que hacen posible la realización de la SuperCopa Juvenil.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Patrocinadores Actuales</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Agradecemos a todas las empresas que han confiado en nosotros para formar parte 
            de este importante evento deportivo.
          </p>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-center">
              <span className="bg-supercopa-gold/90 text-supercopa-navy px-4 py-1 rounded-full">Patrocinadores Platinum</span>
            </h3>
            <div className="grid grid-cols-1 justify-items-center gap-8 mt-8">
              {sponsors.filter(s => s.level === "platinum").map((sponsor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-supercopa-gold/20 p-6 w-full max-w-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img src={sponsor.logo} alt={sponsor.name} className="rounded-md object-contain h-24 w-48" />
                    <div>
                      <h4 className="text-2xl font-bold text-supercopa-navy mb-2">{sponsor.name}</h4>
                      <p className="text-gray-600 mb-4">Patrocinador principal de la SuperCopa Juvenil</p>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-supercopa-gold text-supercopa-navy">
                        Patrocinador Platinum
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-center">
              <span className="bg-gray-400 text-supercopa-navy px-4 py-1 rounded-full">Patrocinadores Gold</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {sponsors.filter(s => s.level === "gold").map((sponsor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 p-4">
                  <div className="flex flex-col items-center">
                    <img src={sponsor.logo} alt={sponsor.name} className="rounded-md object-contain h-20" />
                    <h4 className="text-lg font-semibold text-supercopa-navy mt-4">{sponsor.name}</h4>
                    <span className="inline-flex items-center px-2 py-1 mt-2 rounded-full text-xs font-medium bg-gray-400 text-white">
                      Patrocinador Gold
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">
              <span className="bg-gray-200 text-supercopa-navy px-4 py-1 rounded-full">Patrocinadores Silver</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {sponsors.filter(s => s.level === "silver").map((sponsor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100 p-3">
                  <div className="flex flex-col items-center">
                    <img src={sponsor.logo} alt={sponsor.name} className="rounded-md object-contain h-16" />
                    <h4 className="text-base font-medium text-supercopa-navy mt-3">{sponsor.name}</h4>
                    <span className="inline-flex items-center px-2 py-0.5 mt-2 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                      Silver
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle align="center">Beneficios para Patrocinadores</SectionTitle>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Descubre las ventajas y beneficios que obtendrás al convertirte en patrocinador oficial de la SuperCopa Juvenil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-supercopa-gold transform transition-all duration-300 hover:shadow-lg">
              <div className="bg-supercopa-gold text-supercopa-navy rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-supercopa-navy">Patrocinador Platinum</h3>
              <ul className="space-y-3">
                {sponsorBenefits.platinum.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-supercopa-gold mr-2 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gray-400 transform transition-all duration-300 hover:shadow-lg">
              <div className="bg-gray-400 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-supercopa-navy">Patrocinador Gold</h3>
              <ul className="space-y-3">
                {sponsorBenefits.gold.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-gray-400 mr-2 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gray-300 transform transition-all duration-300 hover:shadow-lg">
              <div className="bg-gray-300 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-supercopa-navy">Patrocinador Silver</h3>
              <ul className="space-y-3">
                {sponsorBenefits.silver.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-gray-300 mr-2 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-supercopa-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Interesado en ser patrocinador?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Sé parte del torneo juvenil con mayor crecimiento en la región y conecta tu marca con miles de familias.
          </p>
          <a href="mailto:patrocinios@supercopamex.com" className="btn-accent text-lg px-8 py-3 inline-block">
            Contáctanos
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Patrocinadores;
