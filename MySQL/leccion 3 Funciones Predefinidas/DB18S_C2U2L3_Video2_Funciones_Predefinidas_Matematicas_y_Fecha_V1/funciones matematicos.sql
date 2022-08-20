#SELECT nombres, (gastos_medicos + gastos_personales) gastos_totales FROM ejemplos.clientes;
#SELECT nombres, (gastos_medicos + gastos_personales) / 2 gastos_promedio FROM ejemplos.clientes;
#SELECT nombres, ROUND((gastos_medicos + gastos_personales) / 2) gastos_promedio FROM ejemplos.clientes;
#SELECT nombres, ROUND((gastos_medicos + gastos_personales)/2, 2) gastos_promedio FROM ejemplos.clientes;

-- SELECT nombres, fecha_inicio FROM ejemplos.clientes 
-- WHERE fecha_inicio BETWEEN "2019-03-01" AND "2019-10-1";

-- SELECT nombres, YEAR(fecha_inicio) year FROM ejemplos.clientes 
-- WHERE fecha_inicio BETWEEN "2019-03-01" AND "2019-10-1";

-- SELECT nombres, MONTH(fecha_inicio) month FROM ejemplos.clientes 
-- WHERE fecha_inicio BETWEEN "2019-03-01" AND "2019-10-1";

-- SELECT nombres, MONTHNAME(fecha_inicio) month FROM ejemplos.clientes 
-- WHERE fecha_inicio BETWEEN "2019-03-01" AND "2019-10-1";

SELECT nombres, WEEK(fecha_inicio) week FROM ejemplos.clientes 
WHERE fecha_inicio BETWEEN "2019-03-01" AND "2019-10-1";

