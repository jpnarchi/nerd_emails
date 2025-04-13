
import { useState } from 'react';

interface GoleadorData {
  position: number;
  name: string;
  team: string;
  goals: number;
  subcategory: string;
}

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

interface PartidoData {
  date: string;
  home: string;
  homeScore: number;
  away: string;
  awayScore: number;
  location: string;
  subcategory: string;
}

interface Edition {
  name: string;
  goalsData: GoleadorData[];
  tablaData: TeamData[];
  partidosData: PartidoData[];
}

export const useResultadosData = () => {
  // Juvenile data - only 1 edition
  const goalsDataJuvenil = [
    { position: 1, name: "Miguel Hernández", team: "Halcones FC", goals: 12, subcategory: "sub20" },
    { position: 2, name: "Carlos Ramírez", team: "Águilas Doradas", goals: 10, subcategory: "sub20" },
    { position: 3, name: "Javier López", team: "Real Monterrey", goals: 9, subcategory: "sub17" },
    { position: 4, name: "Eduardo Torres", team: "Lobos Unidos", goals: 8, subcategory: "sub17" },
    { position: 5, name: "Alejandro Silva", team: "Deportivo Azteca", goals: 7, subcategory: "sub20" },
    { position: 6, name: "Fernando Martínez", team: "Tigres Blancos", goals: 7, subcategory: "sub17" },
    { position: 7, name: "Ricardo González", team: "Pumas del Norte", goals: 6, subcategory: "sub20" },
    { position: 8, name: "Diego Castro", team: "Atlético Regio", goals: 6, subcategory: "sub17" },
    { position: 9, name: "Luis Sánchez", team: "CD Monterrey", goals: 5, subcategory: "sub20" },
    { position: 10, name: "Juan Pérez", team: "Rayados FC", goals: 5, subcategory: "sub17" },
  ];

  const tablaDataJuvenil = [
    { position: 1, team: "Águilas Doradas", played: 7, wins: 6, draws: 1, losses: 0, goalDifference: 15, points: 19, subcategory: "sub20" },
    { position: 2, team: "Real Monterrey", played: 7, wins: 5, draws: 2, losses: 0, goalDifference: 12, points: 17, subcategory: "sub17" },
    { position: 3, team: "Halcones FC", played: 7, wins: 5, draws: 1, losses: 1, goalDifference: 10, points: 16, subcategory: "sub20" },
    { position: 4, team: "Deportivo Azteca", played: 7, wins: 4, draws: 2, losses: 1, goalDifference: 8, points: 14, subcategory: "sub17" },
    { position: 5, team: "Atlético Regio", played: 7, wins: 4, draws: 1, losses: 2, goalDifference: 5, points: 13, subcategory: "sub20" },
    { position: 6, team: "Tigres Blancos", played: 7, wins: 3, draws: 2, losses: 2, goalDifference: 4, points: 11, subcategory: "sub17" },
    { position: 7, team: "Lobos Unidos", played: 7, wins: 3, draws: 1, losses: 3, goalDifference: 1, points: 10, subcategory: "sub20" },
    { position: 8, team: "Pumas del Norte", played: 7, wins: 2, draws: 2, losses: 3, goalDifference: -2, points: 8, subcategory: "sub17" },
    { position: 9, team: "CD Monterrey", played: 7, wins: 1, draws: 1, losses: 5, goalDifference: -8, points: 4, subcategory: "sub20" },
    { position: 10, team: "Rayados FC", played: 7, wins: 0, draws: 1, losses: 6, goalDifference: -12, points: 1, subcategory: "sub17" },
  ];

  const partidosDataJuvenil = [
    { date: "12/05/2024", home: "Águilas Doradas", homeScore: 3, away: "Tigres Blancos", awayScore: 1, location: "Campo 1", subcategory: "sub20" },
    { date: "12/05/2024", home: "Real Monterrey", homeScore: 2, away: "CD Monterrey", awayScore: 0, location: "Campo 2", subcategory: "sub17" },
    { date: "12/05/2024", home: "Halcones FC", homeScore: 4, away: "Rayados FC", awayScore: 1, location: "Campo 3", subcategory: "sub20" },
    { date: "13/05/2024", home: "Deportivo Azteca", homeScore: 2, away: "Pumas del Norte", awayScore: 2, location: "Campo 1", subcategory: "sub17" },
    { date: "13/05/2024", home: "Atlético Regio", homeScore: 3, away: "Lobos Unidos", awayScore: 2, location: "Campo 2", subcategory: "sub20" },
    { date: "13/05/2024", home: "Tigres Blancos", homeScore: 2, away: "Real Monterrey", awayScore: 2, location: "Campo 3", subcategory: "sub17" },
    { date: "14/05/2024", home: "CD Monterrey", homeScore: 1, away: "Halcones FC", awayScore: 3, location: "Campo 1", subcategory: "sub20" },
    { date: "14/05/2024", home: "Rayados FC", homeScore: 0, away: "Águilas Doradas", awayScore: 4, location: "Campo 2", subcategory: "sub17" },
    { date: "14/05/2024", home: "Pumas del Norte", homeScore: 1, away: "Atlético Regio", awayScore: 1, location: "Campo 3", subcategory: "sub20" },
    { date: "15/05/2024", home: "Lobos Unidos", homeScore: 2, away: "Deportivo Azteca", awayScore: 1, location: "Campo 1", subcategory: "sub17" },
  ];

  // Infantil data with specific year categories
  const infantilEditions = [
    {
      name: "4ª Edición (2024)",
      goalsData: [
        // 2014 Category - New
        { position: 1, name: "Gabriel Ramírez", team: "Mini Leones", goals: 13, subcategory: "2014" },
        { position: 2, name: "Santiago López", team: "Dragoncitos", goals: 11, subcategory: "2014" },
        { position: 3, name: "Emilio Torres", team: "Colibríes FC", goals: 9, subcategory: "2014" },
        { position: 4, name: "Sebastián García", team: "Pequeños Guerreros", goals: 8, subcategory: "2014" },
        { position: 5, name: "Leonardo Ortiz", team: "Aguiluchos", goals: 7, subcategory: "2014" },

        // 2013 Category
        { position: 1, name: "Miguel Robles", team: "Mini Leones", goals: 14, subcategory: "2013" },
        { position: 2, name: "Daniel Fuentes", team: "Dragoncitos", goals: 12, subcategory: "2013" },
        { position: 3, name: "Mateo Mendoza", team: "Colibríes FC", goals: 10, subcategory: "2013" },
        { position: 4, name: "Bruno Silva", team: "Pequeños Guerreros", goals: 9, subcategory: "2013" },
        { position: 5, name: "Alejandro Guzmán", team: "Aguiluchos", goals: 8, subcategory: "2013" },
        
        // 2012 Category
        { position: 1, name: "Marco Valencia", team: "Tigritos", goals: 15, subcategory: "2012" },
        { position: 2, name: "Carlos Espinoza", team: "Delfines Jr", goals: 13, subcategory: "2012" },
        { position: 3, name: "Andrés Gutiérrez", team: "Pequeños Zorros", goals: 11, subcategory: "2012" },
        { position: 4, name: "Isaac Luna", team: "Halconcitos", goals: 9, subcategory: "2012" },
        { position: 5, name: "Diego Morales", team: "Mini Pumas", goals: 8, subcategory: "2012" },
        
        // 2010 Category
        { position: 1, name: "Pablo Jiménez", team: "Jaguares Pequeños", goals: 16, subcategory: "2010" },
        { position: 2, name: "Nicolás Vargas", team: "Halcones Juniors", goals: 14, subcategory: "2010" },
        { position: 3, name: "Eduardo Ruiz", team: "Lobitos FC", goals: 12, subcategory: "2010" },
        { position: 4, name: "Joaquín Castro", team: "Mini Toros", goals: 10, subcategory: "2010" },
        { position: 5, name: "Samuel Díaz", team: "Pequeños Leones", goals: 8, subcategory: "2010" },
        
        // 2008 Category
        { position: 1, name: "Matías Herrera", team: "Halcones Juvenil", goals: 18, subcategory: "2008" },
        { position: 2, name: "Javier Campos", team: "Tigres Juvenil", goals: 15, subcategory: "2008" },
        { position: 3, name: "Ricardo Soto", team: "Lobos Junior", goals: 13, subcategory: "2008" },
        { position: 4, name: "Tomás Castillo", team: "Águilas Juvenil", goals: 11, subcategory: "2008" },
        { position: 5, name: "Óscar Montes", team: "Pumas Juvenil", goals: 9, subcategory: "2008" },
      ],
      tablaData: [
        // 2014 Category - New
        { position: 1, team: "Mini Leones", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 15, points: 16, subcategory: "2014" },
        { position: 2, team: "Dragoncitos", played: 6, wins: 4, draws: 2, losses: 0, goalDifference: 12, points: 14, subcategory: "2014" },
        { position: 3, team: "Colibríes FC", played: 6, wins: 3, draws: 1, losses: 2, goalDifference: 7, points: 10, subcategory: "2014" },
        { position: 4, team: "Pequeños Guerreros", played: 6, wins: 1, draws: 2, losses: 3, goalDifference: -5, points: 5, subcategory: "2014" },
        { position: 5, team: "Aguiluchos", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -16, points: 0, subcategory: "2014" },

        // 2013 Category
        { position: 1, team: "Mini Leones", played: 6, wins: 6, draws: 0, losses: 0, goalDifference: 17, points: 18, subcategory: "2013" },
        { position: 2, team: "Dragoncitos", played: 6, wins: 4, draws: 1, losses: 1, goalDifference: 10, points: 13, subcategory: "2013" },
        { position: 3, team: "Colibríes FC", played: 6, wins: 3, draws: 0, losses: 3, goalDifference: 5, points: 9, subcategory: "2013" },
        { position: 4, team: "Pequeños Guerreros", played: 6, wins: 1, draws: 1, losses: 4, goalDifference: -6, points: 4, subcategory: "2013" },
        { position: 5, team: "Aguiluchos", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -16, points: 0, subcategory: "2013" },
        
        // 2012 Category
        { position: 1, team: "Tigritos", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 14, points: 16, subcategory: "2012" },
        { position: 2, team: "Delfines Jr", played: 6, wins: 4, draws: 0, losses: 2, goalDifference: 9, points: 12, subcategory: "2012" },
        { position: 3, team: "Pequeños Zorros", played: 6, wins: 2, draws: 3, losses: 1, goalDifference: 6, points: 9, subcategory: "2012" },
        { position: 4, team: "Halconcitos", played: 6, wins: 2, draws: 0, losses: 4, goalDifference: -7, points: 6, subcategory: "2012" },
        { position: 5, team: "Mini Pumas", played: 6, wins: 0, draws: 2, losses: 4, goalDifference: -11, points: 2, subcategory: "2012" },
        
        // 2010 Category
        { position: 1, team: "Jaguares Pequeños", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 16, points: 16, subcategory: "2010" },
        { position: 2, team: "Halcones Juniors", played: 6, wins: 4, draws: 0, losses: 2, goalDifference: 10, points: 12, subcategory: "2010" },
        { position: 3, team: "Lobitos FC", played: 6, wins: 3, draws: 1, losses: 2, goalDifference: 7, points: 10, subcategory: "2010" },
        { position: 4, team: "Mini Toros", played: 6, wins: 1, draws: 1, losses: 4, goalDifference: -8, points: 4, subcategory: "2010" },
        { position: 5, team: "Pequeños Leones", played: 6, wins: 0, draws: 1, losses: 5, goalDifference: -14, points: 1, subcategory: "2010" },
        
        // 2008 Category
        { position: 1, team: "Halcones Juvenil", played: 6, wins: 6, draws: 0, losses: 0, goalDifference: 19, points: 18, subcategory: "2008" },
        { position: 2, team: "Tigres Juvenil", played: 6, wins: 4, draws: 1, losses: 1, goalDifference: 12, points: 13, subcategory: "2008" },
        { position: 3, team: "Lobos Junior", played: 6, wins: 2, draws: 2, losses: 2, goalDifference: 5, points: 8, subcategory: "2008" },
        { position: 4, team: "Águilas Juvenil", played: 6, wins: 1, draws: 1, losses: 4, goalDifference: -10, points: 4, subcategory: "2008" },
        { position: 5, team: "Pumas Juvenil", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -18, points: 0, subcategory: "2008" },
      ],
      partidosData: [
        // 2014 Category - New
        { date: "15/11/2024", home: "Mini Leones", homeScore: 4, away: "Aguiluchos", awayScore: 0, location: "Campo Infantil 1", subcategory: "2014" },
        { date: "16/11/2024", home: "Dragoncitos", homeScore: 3, away: "Pequeños Guerreros", awayScore: 1, location: "Campo Infantil 1", subcategory: "2014" },
        { date: "17/11/2024", home: "Colibríes FC", homeScore: 2, away: "Aguiluchos", awayScore: 0, location: "Campo Infantil 1", subcategory: "2014" },
        { date: "18/11/2024", home: "Mini Leones", homeScore: 3, away: "Pequeños Guerreros", awayScore: 1, location: "Campo Infantil 1", subcategory: "2014" },

        // 2013 Category
        { date: "15/11/2024", home: "Mini Leones", homeScore: 5, away: "Aguiluchos", awayScore: 0, location: "Campo Infantil 2", subcategory: "2013" },
        { date: "16/11/2024", home: "Dragoncitos", homeScore: 3, away: "Pequeños Guerreros", awayScore: 1, location: "Campo Infantil 2", subcategory: "2013" },
        { date: "17/11/2024", home: "Colibríes FC", homeScore: 4, away: "Aguiluchos", awayScore: 1, location: "Campo Infantil 2", subcategory: "2013" },
        { date: "18/11/2024", home: "Mini Leones", homeScore: 3, away: "Pequeños Guerreros", awayScore: 0, location: "Campo Infantil 2", subcategory: "2013" },
        
        // 2012 Category
        { date: "15/11/2024", home: "Tigritos", homeScore: 4, away: "Mini Pumas", awayScore: 1, location: "Campo Central", subcategory: "2012" },
        { date: "16/11/2024", home: "Delfines Jr", homeScore: 3, away: "Halconcitos", awayScore: 0, location: "Campo Central", subcategory: "2012" },
        { date: "17/11/2024", home: "Pequeños Zorros", homeScore: 2, away: "Mini Pumas", awayScore: 2, location: "Campo Central", subcategory: "2012" },
        { date: "18/11/2024", home: "Tigritos", homeScore: 3, away: "Halconcitos", awayScore: 2, location: "Campo Central", subcategory: "2012" },
        
        // 2010 Category
        { date: "15/11/2024", home: "Jaguares Pequeños", homeScore: 5, away: "Pequeños Leones", awayScore: 0, location: "Campo 2", subcategory: "2010" },
        { date: "16/11/2024", home: "Halcones Juniors", homeScore: 4, away: "Mini Toros", awayScore: 1, location: "Campo 2", subcategory: "2010" },
        { date: "17/11/2024", home: "Lobitos FC", homeScore: 3, away: "Pequeños Leones", awayScore: 1, location: "Campo 2", subcategory: "2010" },
        { date: "18/11/2024", home: "Jaguares Pequeños", homeScore: 4, away: "Mini Toros", awayScore: 0, location: "Campo 2", subcategory: "2010" },
        
        // 2008 Category
        { date: "15/11/2024", home: "Halcones Juvenil", homeScore: 6, away: "Pumas Juvenil", awayScore: 0, location: "Campo 1", subcategory: "2008" },
        { date: "16/11/2024", home: "Tigres Juvenil", homeScore: 4, away: "Águilas Juvenil", awayScore: 1, location: "Campo 1", subcategory: "2008" },
        { date: "17/11/2024", home: "Lobos Junior", homeScore: 3, away: "Pumas Juvenil", awayScore: 0, location: "Campo 1", subcategory: "2008" },
        { date: "18/11/2024", home: "Halcones Juvenil", homeScore: 5, away: "Águilas Juvenil", awayScore: 1, location: "Campo 1", subcategory: "2008" }
      ]
    },
    {
      name: "3ª Edición (2024)",
      goalsData: [
        { position: 1, name: "Ernesto Gil", team: "Mini Leones", goals: 14, subcategory: "2013" },
        { position: 2, name: "Alejandro Núñez", team: "Dragoncitos", goals: 11, subcategory: "2013" },
        { position: 3, name: "Antonio Ruiz", team: "Colibríes FC", goals: 9, subcategory: "2013" },
        { position: 4, name: "David Castillo", team: "Pequeños Guerreros", goals: 8, subcategory: "2013" },
        { position: 5, name: "José Mora", team: "Aguiluchos", goals: 7, subcategory: "2013" },
        
        // 2012 Category
        { position: 1, name: "Raúl Palacios", team: "Tigritos", goals: 12, subcategory: "2012" },
        { position: 2, name: "Mario Pineda", team: "Delfines Jr", goals: 10, subcategory: "2012" },
        { position: 3, name: "Joaquín Gálvez", team: "Pequeños Zorros", goals: 9, subcategory: "2012" },
        { position: 4, name: "Pedro Reyes", team: "Halconcitos", goals: 8, subcategory: "2012" },
        { position: 5, name: "Simón Arias", team: "Mini Pumas", goals: 7, subcategory: "2012" },
        
        // 2011 Category
        { position: 1, name: "Ricardo Soto", team: "Panteras Jr", goals: 15, subcategory: "2011" },
        { position: 2, name: "Diego Valdés", team: "Cóndores FC", goals: 12, subcategory: "2011" },
        { position: 3, name: "Luis Chávez", team: "Diablos Rojos Jr", goals: 10, subcategory: "2011" },
        { position: 4, name: "Gabriel Vargas", team: "Relámpagos", goals: 9, subcategory: "2011" },
        { position: 5, name: "Carlos Aguilar", team: "Aguilas Jr", goals: 8, subcategory: "2011" },
        
        // 2010 Category
        { position: 1, name: "Manuel Ríos", team: "Jaguares Pequeños", goals: 11, subcategory: "2010" },
        { position: 2, name: "Andrés Castro", team: "Halcones Juniors", goals: 10, subcategory: "2010" },
        { position: 3, name: "Oscar Jiménez", team: "Lobitos FC", goals: 9, subcategory: "2010" },
        { position: 4, name: "Felipe Ortiz", team: "Mini Toros", goals: 8, subcategory: "2010" },
        { position: 5, name: "Daniel Flores", team: "Pequeños Leones", goals: 7, subcategory: "2010" },
        
        // 2009 Category
        { position: 1, name: "Javier Herrera", team: "Rayitos FC", goals: 16, subcategory: "2009" },
        { position: 2, name: "Eduardo Vega", team: "Pumas Junior", goals: 13, subcategory: "2009" },
        { position: 3, name: "Martín Mendoza", team: "Águilas Junior", goals: 11, subcategory: "2009" },
        { position: 4, name: "José Luna", team: "Mini Tigres", goals: 9, subcategory: "2009" },
        { position: 5, name: "Ricardo Castillo", team: "Leones Jóvenes", goals: 8, subcategory: "2009" },
        
        // 2008 Category
        { position: 1, name: "Diego Pérez", team: "Halcones Juvenil", goals: 17, subcategory: "2008" },
        { position: 2, name: "Alejandro Díaz", team: "Tigres Juvenil", goals: 14, subcategory: "2008" },
        { position: 3, name: "Carlos Gómez", team: "Lobos Junior", goals: 12, subcategory: "2008" },
        { position: 4, name: "Fernando Ruiz", team: "Águilas Juvenil", goals: 10, subcategory: "2008" },
        { position: 5, name: "Hugo Vargas", team: "Pumas Juvenil", goals: 9, subcategory: "2008" },
      ],
      tablaData: [
        // 2013 Category
        { position: 1, team: "Mini Leones", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 14, points: 16, subcategory: "2013" },
        { position: 2, team: "Dragoncitos", played: 6, wins: 4, draws: 2, losses: 0, goalDifference: 11, points: 14, subcategory: "2013" },
        { position: 3, team: "Colibríes FC", played: 6, wins: 3, draws: 1, losses: 2, goalDifference: 6, points: 10, subcategory: "2013" },
        { position: 4, team: "Pequeños Guerreros", played: 6, wins: 1, draws: 2, losses: 3, goalDifference: -3, points: 5, subcategory: "2013" },
        { position: 5, team: "Aguiluchos", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -18, points: 0, subcategory: "2013" },
        
        // 2012 Category
        { position: 1, team: "Tigritos", played: 6, wins: 5, draws: 0, losses: 1, goalDifference: 12, points: 15, subcategory: "2012" },
        { position: 2, team: "Delfines Jr", played: 6, wins: 4, draws: 1, losses: 1, goalDifference: 9, points: 13, subcategory: "2012" },
        { position: 3, team: "Pequeños Zorros", played: 6, wins: 3, draws: 2, losses: 1, goalDifference: 7, points: 11, subcategory: "2012" },
        { position: 4, team: "Halconcitos", played: 6, wins: 1, draws: 1, losses: 4, goalDifference: -5, points: 4, subcategory: "2012" },
        { position: 5, team: "Mini Pumas", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -12, points: 0, subcategory: "2012" },
        
        // 2011 Category
        { position: 1, team: "Panteras Jr", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 15, points: 16, subcategory: "2011" },
        { position: 2, team: "Cóndores FC", played: 6, wins: 4, draws: 0, losses: 2, goalDifference: 10, points: 12, subcategory: "2011" },
        { position: 3, team: "Diablos Rojos Jr", played: 6, wins: 3, draws: 2, losses: 1, goalDifference: 8, points: 11, subcategory: "2011" },
        { position: 4, team: "Relámpagos", played: 6, wins: 2, draws: 0, losses: 4, goalDifference: -4, points: 6, subcategory: "2011" },
        { position: 5, team: "Aguilas Jr", played: 6, wins: 0, draws: 1, losses: 5, goalDifference: -14, points: 1, subcategory: "2011" },
        
        // 2010 Category
        { position: 1, team: "Jaguares Pequeños", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 13, points: 16, subcategory: "2010" },
        { position: 2, team: "Halcones Juniors", played: 6, wins: 3, draws: 3, losses: 0, goalDifference: 9, points: 12, subcategory: "2010" },
        { position: 3, team: "Lobitos FC", played: 6, wins: 3, draws: 1, losses: 2, goalDifference: 5, points: 10, subcategory: "2010" },
        { position: 4, team: "Mini Toros", played: 6, wins: 1, draws: 1, losses: 4, goalDifference: -6, points: 4, subcategory: "2010" },
        { position: 5, team: "Pequeños Leones", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -13, points: 0, subcategory: "2010" },
        
        // 2009 Category
        { position: 1, team: "Rayitos FC", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 15, points: 16, subcategory: "2009" },
        { position: 2, team: "Pumas Junior", played: 6, wins: 4, draws: 1, losses: 1, goalDifference: 12, points: 13, subcategory: "2009" },
        { position: 3, team: "Águilas Junior", played: 6, wins: 3, draws: 1, losses: 2, goalDifference: 7, points: 10, subcategory: "2009" },
        { position: 4, team: "Mini Tigres", played: 6, wins: 1, draws: 2, losses: 3, goalDifference: -6, points: 5, subcategory: "2009" },
        { position: 5, team: "Leones Jóvenes", played: 6, wins: 0, draws: 1, losses: 5, goalDifference: -15, points: 1, subcategory: "2009" },
        
        // 2008 Category
        { position: 1, team: "Halcones Juvenil", played: 6, wins: 5, draws: 1, losses: 0, goalDifference: 17, points: 16, subcategory: "2008" },
        { position: 2, team: "Tigres Juvenil", played: 6, wins: 4, draws: 1, losses: 1, goalDifference: 11, points: 13, subcategory: "2008" },
        { position: 3, team: "Lobos Junior", played: 6, wins: 3, draws: 2, losses: 1, goalDifference: 8, points: 11, subcategory: "2008" },
        { position: 4, team: "Águilas Juvenil", played: 6, wins: 1, draws: 0, losses: 5, goalDifference: -12, points: 3, subcategory: "2008" },
        { position: 5, team: "Pumas Juvenil", played: 6, wins: 0, draws: 0, losses: 6, goalDifference: -16, points: 0, subcategory: "2008" }
      ],
      partidosData: [
        // 2013 Category
        { date: "10/06/2024", home: "Mini Leones", homeScore: 4, away: "Aguiluchos", awayScore: 1, location: "Campo Infantil 1", subcategory: "2013" },
        { date: "11/06/2024", home: "Dragoncitos", homeScore: 3, away: "Pequeños Guerreros", awayScore: 0, location: "Campo Infantil 1", subcategory: "2013" },
        { date: "12/06/2024", home: "Colibríes FC", homeScore: 3, away: "Aguiluchos", awayScore: 0, location: "Campo Infantil 1", subcategory: "2013" },
        { date: "13/06/2024", home: "Mini Leones", homeScore: 2, away: "Pequeños Guerreros", awayScore: 1, location: "Campo Infantil 1", subcategory: "2013" },
        
        // 2012 Category
        { date: "10/06/2024", home: "Tigritos", homeScore: 3, away: "Mini Pumas", awayScore: 0, location: "Campo Central", subcategory: "2012" },
        { date: "11/06/2024", home: "Delfines Jr", homeScore: 2, away: "Halconcitos", awayScore: 0, location: "Campo Central", subcategory: "2012" },
        { date: "12/06/2024", home: "Pequeños Zorros", homeScore: 1, away: "Mini Pumas", awayScore: 1, location: "Campo Central", subcategory: "2012" },
        { date: "13/06/2024", home: "Tigritos", homeScore: 2, away: "Halconcitos", awayScore: 1, location: "Campo Central", subcategory: "2012" },
        
        // 2011 Category
        { date: "10/06/2024", home: "Panteras Jr", homeScore: 4, away: "Aguilas Jr", awayScore: 0, location: "Campo 3", subcategory: "2011" },
        { date: "11/06/2024", home: "Cóndores FC", homeScore: 3, away: "Relámpagos", awayScore: 1, location: "Campo 3", subcategory: "2011" },
        { date: "12/06/2024", home: "Diablos Rojos Jr", homeScore: 2, away: "Aguilas Jr", awayScore: 1, location: "Campo 3", subcategory: "2011" },
        { date: "13/06/2024", home: "Panteras Jr", homeScore: 3, away: "Relámpagos", awayScore: 0, location: "Campo 3", subcategory: "2011" },
        
        // 2010 Category
        { date: "10/06/2024", home: "Jaguares Pequeños", homeScore: 4, away: "Pequeños Leones", awayScore: 0, location: "Campo 2", subcategory: "2010" },
        { date: "11/06/2024", home: "Halcones Juniors", homeScore: 3, away: "Mini Toros", awayScore: 1, location: "Campo 2", subcategory: "2010" },
        { date: "12/06/2024", home: "Lobitos FC", homeScore: 2, away: "Pequeños Leones", awayScore: 0, location: "Campo 2", subcategory: "2010" },
        { date: "13/06/2024", home: "Jaguares Pequeños", homeScore: 3, away: "Mini Toros", awayScore: 1, location: "Campo 2", subcategory: "2010" },
        
        // 2009 Category
        { date: "10/06/2024", home: "Rayitos FC", homeScore: 5, away: "Leones Jóvenes", awayScore: 0, location: "Campo 4", subcategory: "2009" },
        { date: "11/06/2024", home: "Pumas Junior", homeScore: 3, away: "Mini Tigres", awayScore: 1, location: "Campo 4", subcategory: "2009" },
        { date: "12/06/2024", home: "Águilas Junior", homeScore: 2, away: "Leones Jóvenes", awayScore: 1, location: "Campo 4", subcategory: "2009" },
        { date: "13/06/2024", home: "Rayitos FC", homeScore: 4, away: "Mini Tigres", awayScore: 0, location: "Campo 4", subcategory: "2009" },
        
        // 2008 Category
        { date: "10/06/2024", home: "Halcones Juvenil", homeScore: 5, away: "Pumas Juvenil", awayScore: 0, location: "Campo 1", subcategory: "2008" },
        { date: "11/06/2024", home: "Tigres Juvenil", homeScore: 3, away: "Águilas Juvenil", awayScore: 1, location: "Campo 1", subcategory: "2008" },
        { date: "12/06/2024", home: "Lobos Junior", homeScore: 2, away: "Pumas Juvenil", awayScore: 0, location: "Campo 1", subcategory: "2008" },
        { date: "13/06/2024", home: "Halcones Juvenil", homeScore: 4, away: "Águilas Juvenil", awayScore: 0, location: "Campo 1", subcategory: "2008" }
      ]
    }
  ];

  // Function to filter data based on subcategory
  const getFilteredData = (data, subcategory) => {
    if (subcategory === "all") {
      return data;
    } else {
      return data.filter(item => item.subcategory === subcategory);
    }
  };

  return {
    juvenil: {
      goalsData: goalsDataJuvenil,
      tablaData: tablaDataJuvenil,
      partidosData: partidosDataJuvenil,
    },
    infantil: infantilEditions,
    getFilteredData,
  };
};

export default useResultadosData;
