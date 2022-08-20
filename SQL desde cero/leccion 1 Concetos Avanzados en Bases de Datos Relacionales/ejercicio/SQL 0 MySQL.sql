CREATE TABLE `actores` (
  `id` int PRIMARY KEY,
  `nombre` varchar(255) NOT NULL,
  `fecha_nacimiento` date
);

CREATE TABLE `peliculas` (
  `id` int,
  `nombre` varchar(255) NOT NULL,
  `duracion` float NOT NULL,
  `fecha_estreno` date NOT NULL,
  `nombre_director` varchar(255) NOT NULL,
  `id_genero` int,
  PRIMARY KEY (`id`, `id_genero`)
);

CREATE TABLE `genero` (
  `id` int PRIMARY KEY,
  `genero` varchar(255) UNIQUE,
  `imagen` varchar(255) NOT NULL
);

CREATE TABLE `actua` (
  `id_actor` int,
  `id_pelicula` int,
  `personaje` varchar(255),
  PRIMARY KEY (`id_actor`, `id_pelicula`)
);

CREATE INDEX `edad` ON `actores` (`fecha_nacimiento`);

CREATE UNIQUE INDEX `actores_index_1` ON `actores` (`id`);

CREATE INDEX `clave foranea` ON `peliculas` (`id_genero`);

CREATE UNIQUE INDEX `peliculas_index_3` ON `peliculas` (`id`);

CREATE INDEX `buscar` ON `peliculas` (`nombre_director`, `fecha_estreno`, `duracion`);

CREATE INDEX `buscar` ON `peliculas` (`nombre_director`, `fecha_estreno`);

CREATE INDEX `buscar` ON `peliculas` (`nombre_director`, `duracion`);

CREATE INDEX `buscar` ON `peliculas` (`fecha_estreno`, `duracion`);

ALTER TABLE `genero` ADD FOREIGN KEY (`id`) REFERENCES `peliculas` (`id_genero`);

ALTER TABLE `actores` ADD FOREIGN KEY (`id`) REFERENCES `actua` (`id_actor`);

ALTER TABLE `peliculas` ADD FOREIGN KEY (`id`) REFERENCES `actua` (`id_pelicula`);
