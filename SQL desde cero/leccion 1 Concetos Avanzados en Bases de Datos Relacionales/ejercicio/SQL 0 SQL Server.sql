CREATE TABLE [actores] (
  [id] int PRIMARY KEY,
  [nombre] nvarchar(255) NOT NULL,
  [fecha_nacimiento] date
)
GO

CREATE TABLE [peliculas] (
  [id] int,
  [nombre] nvarchar(255) NOT NULL,
  [duracion] float NOT NULL,
  [fecha_estreno] date NOT NULL,
  [nombre_director] nvarchar(255) NOT NULL,
  [id_genero] int,
  PRIMARY KEY ([id], [id_genero])
)
GO

CREATE TABLE [genero] (
  [id] int PRIMARY KEY,
  [genero] nvarchar(255) UNIQUE,
  [imagen] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [actua] (
  [id_actor] int,
  [id_pelicula] int,
  [personaje] nvarchar(255),
  PRIMARY KEY ([id_actor], [id_pelicula])
)
GO

CREATE INDEX [edad] ON [actores] ("fecha_nacimiento")
GO

CREATE UNIQUE INDEX [actores_index_1] ON [actores] ("id")
GO

CREATE INDEX [clave foranea] ON [peliculas] ("id_genero")
GO

CREATE UNIQUE INDEX [peliculas_index_3] ON [peliculas] ("id")
GO

CREATE INDEX [buscar] ON [peliculas] ("nombre_director", "fecha_estreno", "duracion")
GO

CREATE INDEX [buscar] ON [peliculas] ("nombre_director", "fecha_estreno")
GO

CREATE INDEX [buscar] ON [peliculas] ("nombre_director", "duracion")
GO

CREATE INDEX [buscar] ON [peliculas] ("fecha_estreno", "duracion")
GO

ALTER TABLE [genero] ADD FOREIGN KEY ([id]) REFERENCES [peliculas] ([id_genero])
GO

ALTER TABLE [actores] ADD FOREIGN KEY ([id]) REFERENCES [actua] ([id_actor])
GO

ALTER TABLE [peliculas] ADD FOREIGN KEY ([id]) REFERENCES [actua] ([id_pelicula])
GO
