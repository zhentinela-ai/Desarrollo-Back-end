#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (1, 'La vida del futbol', 100, '2019-01-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (2, 'Los beneficios del té', 50, '2019-01-10');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (3, 'Firman la paz', 70, '2019-01-02');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (4, 'Nuevo libro', 30, '2019-02-03');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (5, 'Los acuerdos', 80, '2019-02-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (6, 'Viva la paz', 90, '2019-02-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (7, 'Reencuentro', 100, '2019-02-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (8, 'No más', 10, '2019-02-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (9, 'Gran concierto', 10, '2019-02-01');
#INSERT INTO noticias(id, titulo, visitas, fecha) VALUES (10, 'Super receta', 11, '2019-01-01');

#SELECT AVG(visitas) FROM noticias;

-- SELECT * FROM noticias 
-- WHERE
-- visitas < (SELECT AVG(visitas) FROM noticias);

SELECT MIN(visitas) menos_visitada FROM noticias WHERE id NOT IN
(SELECT id FROM noticias 
WHERE
visitas < (SELECT AVG(visitas) FROM noticias));





