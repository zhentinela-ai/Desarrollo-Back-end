SELECT * FROM pacientes WHERE genero = 'femenino'
SELECT * FROM pacientes WHERE genero = 'femenino' ORDER BY altura
SELECT * FROM pacientes WHERE genero = 'femenino' AND tipo_sanguineo = 'O+'
SELECT * FROM pacientes WHERE genero = 'femenino' AND tipo_sanguineo = 'O+' ORDER BY altura DESC 
SELECT nombre FROM pacientes WHERE tipo_sanguineo = 'O+'
SELECT nombre, altura FROM pacientes WHERE genero = 'masculino' AND tipo_sanguineo = 'O+'
SELECT nombre, altura FROM pacientes WHERE genero = 'masculino' AND tipo_sanguineo = 'O+' AND altura > 180