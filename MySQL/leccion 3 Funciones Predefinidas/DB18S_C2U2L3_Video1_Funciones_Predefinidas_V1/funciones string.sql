#SELECT * FROM clientes WHERE nombres = "ana"; #no distingue mayúsculas de mpinisculas
#SELECT * FROM clientes WHERE nombres LIKE "ana%"; #% "cualquier cosa", busca ana y cualquier cosa que este después.
#SELECT * FROM clientes WHERE nombres LIKE "%ar%";
#SELECT CONCAT(nombres, ' ', apellidos) nombre_completo FROM clientes;
#SELECT UCASE(CONCAT('    ', nombres, ' ', apellidos)) nombre_completo FROM clientes; #UCASE: uppercase
#SELECT TRIM(UCASE(CONCAT('    ', nombres, ' ', apellidos))) nombre_completo FROM clientes;
#SELECT  nombres, IF(gastos_medicos < 10, 'bajos', 'altos') categorias_gastos_medicos FROM clientes;
SELECT nombres, MD5(apellidos) FROM clientes; #criptográficos

#SELECT * FROM ejemplos.clientes;