-- SELECT CONCAT(
-- 		primer_nombre, ' ',
-- 		segundo_nombre, ' ',
-- 		primer_apellido, ' ',
--         segundo_apellido) nombre_completo FROM personajes;

#UPDATE personajes SET descripcion=REPLACE(descripcion, "yes", "Sí");
-- UPDATE personajes SET descripcion="%yes%" WHERE descripcion="%Sí%";
-- SELECT * FROM personajes; 

SELECT IF(apodo IS NULL, "N/A", LCASE(apodo)) Apodos FROM personajes;

#SELECT * FROM ejemplos.personajes;