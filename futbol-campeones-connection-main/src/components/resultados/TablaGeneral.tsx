
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface TeamData {
  position: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalDifference: number;
  points: number;
  subcategory: string;
}

interface TablaGeneralProps {
  data: TeamData[];
  activeCategory: string;
  editionName?: string;
  activeSubcategory: string;
  getSubcategoryLabel: (subcategory: string) => string;
}

const TablaGeneral = ({ 
  data, 
  activeCategory, 
  editionName, 
  activeSubcategory, 
  getSubcategoryLabel 
}: TablaGeneralProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-supercopa-navy border-b pb-3">
        Tabla General - Categoría {activeCategory === "juvenil" ? 
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
              <TableHead className="text-left text-white">Equipo</TableHead>
              <TableHead className="text-center text-white">PJ</TableHead>
              <TableHead className="text-center text-white">G</TableHead>
              <TableHead className="text-center text-white">E</TableHead>
              <TableHead className="text-center text-white">P</TableHead>
              <TableHead className="text-center text-white">DIF</TableHead>
              <TableHead className="text-center text-white">PTS</TableHead>
              {activeSubcategory === "all" && (
                <TableHead className="text-left text-white">Categoría</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((team, index) => (
                <TableRow 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${index < 4 ? 'bg-green-50 hover:bg-green-100' : index > 7 ? 'bg-red-50 hover:bg-red-100' : ''}`}
                >
                  <TableCell className="text-center font-bold">
                    {index + 1 <= 4 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">
                        {index + 1}
                      </span>
                    ) : index + 1 > 8 ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-xs">
                        {index + 1}
                      </span>
                    ) : (
                      index + 1
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{team.team}</TableCell>
                  <TableCell className="text-center">{team.played}</TableCell>
                  <TableCell className="text-center">{team.wins}</TableCell>
                  <TableCell className="text-center">{team.draws}</TableCell>
                  <TableCell className="text-center">{team.losses}</TableCell>
                  <TableCell className="text-center font-medium">
                    <span className={team.goalDifference > 0 ? 'text-green-600' : team.goalDifference < 0 ? 'text-red-600' : ''}>
                      {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                    </span>
                  </TableCell>
                  <TableCell className="text-center font-bold">{team.points}</TableCell>
                  {activeSubcategory === "all" && (
                    <TableCell className="text-gray-600 font-medium">
                      {getSubcategoryLabel(team.subcategory)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={activeSubcategory === "all" ? 9 : 8} className="text-center py-4 text-gray-500">
                  No hay equipos disponibles para esta categoría
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex gap-6 flex-wrap">
        <div className="flex items-center">
          <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Clasificación</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-gray-200 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Zona Media</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Descenso</span>
        </div>
      </div>
    </div>
  );
};

export default TablaGeneral;
