CREATE TABLE `control_de_asistencia` (
  `nombre` varchar(255),
  `apellido` varchar(255),
  `presentacion` varchar(255),
  `nombre_presentador` varchar(255),
  `apellido_presentador` varchar(255)
);

CREATE TABLE `usuarios` (
  `usuario_id` int PRIMARY KEY,
  `nombre` varchar(255),
  `apellido` varchar(255)
);

CREATE TABLE `usuario_presentacion` (
  `usuario_id` int PRIMARY KEY,
  `presentacion` varchar(255),
  `nombre_presentador` varchar(255),
  `apellido_presentador` varchar(255)
);

CREATE TABLE `presentaciones` (
  `presentacion_id` int PRIMARY KEY,
  `titulo` varchar(255),
  `nombre_presentador` varchar(255),
  `apellido_presentador` varchar(255)
);

CREATE TABLE `usuarios_presentaciones` (
  `usuario_id` int,
  `presentacion_id` int,
  PRIMARY KEY (`usuario_id`, `presentacion_id`)
);

ALTER TABLE `usuarios` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuario_presentacion` (`usuario_id`);

ALTER TABLE `usuarios_presentaciones` ADD FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`);

ALTER TABLE `presentaciones` ADD FOREIGN KEY (`presentacion_id`) REFERENCES `usuarios_presentaciones` (`presentacion_id`);
