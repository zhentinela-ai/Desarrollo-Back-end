#SELECT * FROM lista_a JOIN lista_b ON lista_a.email = lista_b.email;
#SELECT lista_a.email FROM lista_a JOIN lista_b ON lista_a.email = lista_b.email;
#SELECT * FROM lista_a LEFT JOIN lista_b ON lista_a.email = lista_b.email;
-- SELECT lista_a.email FROM lista_a LEFT JOIN lista_b ON lista_a.email = lista_b.email
-- WHERE lista_b.email IS NULL;
#SELECT * FROM lista_a RIGHT JOIN lista_b ON lista_a.email = lista_b.email;
SELECT lista_b.email FROM lista_a RIGHT JOIN lista_b ON lista_a.email = lista_b.email
WHERE lista_a.email IS NULL;
