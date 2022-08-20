SHOW DATABASES;
CREATE DATABASE tienda;

CREATE TABLE productos(
  id int(10) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  cantidad int(10) NOT NULL,
  precio float NOT NULL,
  PRIMARY KEY (id)
);

SHOW TABLES;

DESCRIBE productos;

INSERT INTO productos (nombre, cantidad, precio) VALUES ("keyboard", 10, 1500);