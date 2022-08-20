#INSERT INTO usuarios (nombre, email) VALUES ("luis", "luis@gmail.com");
#INSERT INTO usuarios (nombre, email) VALUES ("maría", "maria@gmail.com");
#INSERT INTO usuarios (nombre, email) VALUES ("pedro", "pedro@gmail.com");

#INSERT INTO aplicaciones (nombre, url) VALUES ("app1", "https://app1.com");
#INSERT INTO aplicaciones (nombre, url) VALUES ("app2", "https://app2.com");

#INSERT INTO tipo_usuarios (descripcion) VALUES ("Análista, análista de bigdata");

#INSERT INTO permisos (usuario_id, tipo_usuarios_id, aplicacion_id) VALUES (5, 4, 4);
#INSERT INTO permisos (usuario_id, tipo_usuarios_id, aplicacion_id) VALUES (4, 2, 2);
#INSERT INTO permisos (usuario_id, tipo_usuarios_id, aplicacion_id) VALUES (6, 4, 5);

#INSERT INTO empleados (email, username) VALUES ("maria@gmail.com", "mariaDelCarmen");
#INSERT INTO empleados (email, username) VALUES ("jd@gmail.com", "zhent");
#INSERT INTO empleados (email, username) VALUES ("pedro@gmail.com", "pedroCasas");
#INSERT INTO empleados (email, username) VALUES ("luis@gmail.com", "luisgamer");

-- SELECT empleados.email FROM empleados LEFT JOIN usuarios ON empleados.email = usuarios.email
-- WHERE usuarios.email IS NULL; 

-- SELECT usuarios.email FROM empleados RIGHT JOIN usuarios ON empleados.email = usuarios.email
-- WHERE empleados.email IS NULL;

SELECT usuarios.nombre, aplicaciones.nombre FROM permisos JOIN usuarios ON usuarios.id = permisos.usuario_id
					   JOIN aplicaciones ON aplicaciones.id = permisos.aplicacion_id;
