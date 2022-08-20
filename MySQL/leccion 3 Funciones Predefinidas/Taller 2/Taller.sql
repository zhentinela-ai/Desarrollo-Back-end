#SELECT nombre, ROUND((peso) / 3, 3) peso_promedio FROM atletas;
#SELECT nombre, MIN(edad) FROM atletas;
#SELECT nombre, MAX(estatura) FROM atletas;
SELECT nombre, ROUND((carreras_ganadas * 100) / carreras_competidas, 2) porcentaje_carreras_ganadas FROM atletas;

#SELECT * FROM ejemplos.atletas;