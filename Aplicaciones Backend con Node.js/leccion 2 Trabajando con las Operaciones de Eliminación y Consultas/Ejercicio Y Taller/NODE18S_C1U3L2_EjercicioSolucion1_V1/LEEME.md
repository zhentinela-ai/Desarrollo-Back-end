# Ordenando

La estrategía en esta ocasión es enviar un parámetro en el `URL` que indique el orden a la ruta ya existente `/`, luego este parámetro será utilizado para el `SQL`

## Agregando los enlaces 

```HTML
<th><a href="/?orden=id">id</a></th>
<th><a href="/?orden=nombre">precio</a></th>
<th><a href="/?orden=cantidad">cantidad</a></th>
<th><a href="/?orden=precio">precio</a></th>
```

## Lógica para el orden

```Javascript
let query = `SELECT * FROM productos ORDER BY nombre`
if (peticion.query.orden == "precio"){
  query = `SELECT * FROM productos ORDER BY precio`
}
else if (peticion.query.orden == "cantidad"){
  query = `SELECT * FROM productos ORDER BY cantidad`
}
else if (peticion.query.orden == "id"){
  query = `SELECT * FROM productos ORDER BY id`
}
```
