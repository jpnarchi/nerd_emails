-- Drop existing tables in reverse order of dependencies
DROP TABLE IF EXISTS goles;
DROP TABLE IF EXISTS partidos;
DROP TABLE IF EXISTS ediciones;
DROP TABLE IF EXISTS jugadores;
DROP TABLE IF EXISTS equipos;
DROP TABLE IF EXISTS subcategorias;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS administradores;

-- Create tables with updated schema
CREATE TABLE administradores (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  rol VARCHAR(20) NOT NULL CHECK (rol IN ('admin', 'editor')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE categorias (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE subcategorias (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  categoria_id UUID NOT NULL REFERENCES categorias(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE equipos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  logo_url TEXT,
  categoria_id UUID REFERENCES categorias(id),
  subcategoria_id UUID REFERENCES subcategorias(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE jugadores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE,
  numero_camiseta INTEGER,
  equipo_id UUID REFERENCES equipos(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE ediciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(100) NOT NULL,
  anio INTEGER NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  descripcion TEXT,
  categoria_id UUID REFERENCES categorias(id),
  subcategoria_id UUID REFERENCES subcategorias(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE partidos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  equipo_local_id UUID REFERENCES equipos(id),
  equipo_visitante_id UUID REFERENCES equipos(id),
  edicion_id UUID REFERENCES ediciones(id),
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  resultado_local INTEGER,
  resultado_visitante INTEGER,
  estado VARCHAR(20) NOT NULL CHECK (estado IN ('pendiente', 'en_curso', 'finalizado', 'cancelado')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE goles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  partido_id UUID NOT NULL REFERENCES partidos(id) ON DELETE CASCADE,
  jugador_id UUID NOT NULL REFERENCES jugadores(id),
  minuto INTEGER NOT NULL,
  tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('normal', 'penalti', 'autogol')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
); 