
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface PartidoData {
  date: string;
  home: string;
  homeScore: number;
  away: string;
  awayScore: number;
  location: string;
  subcategory: string;
}

interface TablaPartidosProps {
  data: PartidoData[];
  activeCategory: string;
  editionName?: string;
  activeSubcategory: string;
  getSubcategoryLabel: (subcategory: string) => string;
}

const TablaPartidos = ({ 
  data, 
  activeCategory, 
  editionName, 
  activeSubcategory, 
  getSubcategoryLabel 
}: TablaPartidosProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-supercopa-navy border-b pb-3">
        Últimos Resultados - Categoría {activeCategory === "juvenil" ? 
          "Juvenil" : 
          `Infantil ${editionName}`
        }
        {activeSubcategory !== "all" && (
          <span className="ml-2 text-lg text-supercopa-gold">
            ({getSubcategoryLabel(activeSubcategory)})
          </span>
        )}
      </h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-supercopa-navy text-white">
              <TableHead className="text-left text-white">Fecha</TableHead>
              <TableHead className="text-left text-white">Local</TableHead>
              <TableHead className="text-center text-white">Resultado</TableHead>
              <TableHead className="text-left text-white">Visitante</TableHead>
              <TableHead className="text-left text-white">Ubicación</TableHead>
              {activeSubcategory === "all" && (
                <TableHead className="text-left text-white">Categoría</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((partido, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <TableCell>{partido.date}</TableCell>
                  <TableCell className="font-medium">{partido.home}</TableCell>
                  <TableCell className="text-center">
                    <span className={`px-3 py-1 rounded-md font-bold ${partido.homeScore > partido.awayScore ? 'bg-green-100 text-green-800' : partido.homeScore < partido.awayScore ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {partido.homeScore} - {partido.awayScore}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{partido.away}</TableCell>
                  <TableCell className="text-gray-600">{partido.location}</TableCell>
                  {activeSubcategory === "all" && (
                    <TableCell className="text-gray-600 font-medium">
                      {getSubcategoryLabel(partido.subcategory)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={activeSubcategory === "all" ? 6 : 5} className="text-center py-4 text-gray-500">
                  No hay resultados disponibles para esta categoría
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TablaPartidos;
