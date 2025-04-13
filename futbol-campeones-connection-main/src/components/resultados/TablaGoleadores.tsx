
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface GoleadorData {
  position: number;
  name: string;
  team: string;
  goals: number;
  subcategory: string;
}

interface TablaGoleadoresProps {
  data: GoleadorData[];
  activeCategory: string;
  editionName?: string;
  activeSubcategory: string;
  getSubcategoryLabel: (subcategory: string) => string;
}

const TablaGoleadores = ({ 
  data, 
  activeCategory, 
  editionName, 
  activeSubcategory, 
  getSubcategoryLabel 
}: TablaGoleadoresProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-supercopa-navy border-b pb-3">
        Tabla de Goleadores - Categoría {activeCategory === "juvenil" ? 
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
              <TableHead className="text-center text-white">Pos.</TableHead>
              <TableHead className="text-left text-white">Jugador</TableHead>
              <TableHead className="text-left text-white">Equipo</TableHead>
              <TableHead className="text-center text-white">Goles</TableHead>
              {activeSubcategory === "all" && (
                <TableHead className="text-left text-white">Categoría</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((player, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <TableCell className="text-center">
                    {index + 1 <= 3 ? (
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-white ${index + 1 === 1 ? 'bg-supercopa-gold' : index + 1 === 2 ? 'bg-gray-400' : 'bg-amber-700'}`}>
                        {index + 1}
                      </span>
                    ) : (
                      index + 1
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.team}</TableCell>
                  <TableCell className="text-center font-bold">{player.goals}</TableCell>
                  {activeSubcategory === "all" && (
                    <TableCell className="text-gray-600 font-medium">
                      {getSubcategoryLabel(player.subcategory)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={activeSubcategory === "all" ? 5 : 4} className="text-center py-4 text-gray-500">
                  No hay goleadores disponibles para esta categoría
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TablaGoleadores;
