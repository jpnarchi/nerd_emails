import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoadingProvider } from "./context/LoadingContext";
import Index from "./pages/Index";
import Resultados from "./pages/Resultados";
import Patrocinadores from "./pages/Patrocinadores";
import TorneosAnteriores from "./pages/TorneosAnteriores";
import Galeria from "./pages/Galeria";
import Registro from "./pages/Registro";
import NotFound from "./pages/NotFound";

// Páginas de administración
import AdminLogin from "./pages/admin/AdminLogin";
import DashboardLayout from "./pages/admin/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import EquiposAdmin from "./pages/admin/EquiposAdmin";
import JugadoresAdmin from "./pages/admin/JugadoresAdmin";
import PartidosAdmin from "./pages/admin/PartidosAdmin";
import EdicionesAdmin from "./pages/admin/EdicionesAdmin";
import ConfiguracionAdmin from "./pages/admin/ConfiguracionAdmin";
import CategoriasAdmin from "./pages/admin/CategoriasAdmin";
import SubcategoriasAdmin from "./pages/admin/SubcategoriasAdmin";
import AdministradoresAdmin from "./pages/admin/AdministradoresAdmin";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Index />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/torneos-anteriores" element={<TorneosAnteriores />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/registro" element={<Registro />} />
            
            {/* Rutas de administración */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="equipos" element={<EquiposAdmin />} />
              <Route path="jugadores" element={<JugadoresAdmin />} />
              <Route path="partidos" element={<PartidosAdmin />} />
              <Route path="ediciones" element={<EdicionesAdmin />} />
              <Route path="categorias" element={<CategoriasAdmin />} />
              <Route path="subcategorias" element={<SubcategoriasAdmin />} />
              <Route path="administradores" element={<AdministradoresAdmin />} />
              <Route path="configuracion" element={<ConfiguracionAdmin />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LoadingProvider>
    </QueryClientProvider>
  );
};

export default App;
