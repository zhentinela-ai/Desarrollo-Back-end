-- SELECT * FROM clientes
-- WHERE id IN (1, 3); #todos los clientes donde el "id" tenga alguno de estos valores.

-- En los subqueries se trabaja de adentro hacia afuera.
-- SELECT * FROM clientes 
-- WHERE 
-- gastos_personales > (SELECT AVG(gastos_personales) FROM clientes);

-- SELECT * FROM cliente_detalles WHERE cliente_id IN
-- (SELECT id FROM clientes 
-- WHERE 
-- gastos_personales > (SELECT AVG(gastos_personales) FROM clientes));

CREATE TABLE clientes_nombres (SELECT nombres FROM clientes);
