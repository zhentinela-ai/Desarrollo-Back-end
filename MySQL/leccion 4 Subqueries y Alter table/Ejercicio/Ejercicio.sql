-- ALTER TABLE empleados 
-- ADD COLUMN genero_id INT NOT NULL AFTER username,
-- DROP PRIMARY KEY,
-- ADD PRIMARY KEY (id, genero_id);

-- ALTER TABLE empleados
-- CHANGE COLUMN genero_id genero_id INT NOT NULL;

-- ALTER TABLE empleados ADD CONSTRAINT fk_genero_id
-- FOREIGN KEY (genero_id)
-- REFERENCES generos(id)
-- ON DELETE CASCADE
-- ON UPDATE CASCADE;

-- ALTER TABLE empleados ADD INDEX ix_genero_id (genero_id ASC);

-- ALTER TABLE empleados CHANGE COLUMN email correo_electronico
-- VARCHAR(255) NOT NULL;

-- ALTER TABLE empleados DROP COLUMN username;

DESCRIBE empleados;
