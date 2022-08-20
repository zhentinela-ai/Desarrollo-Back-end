# Internacionalización

Primero confiruamos los idiomas que queremos

```Javascript
  locales: ['es', 'en', 'pr'],
```

También colocamos uno predeterminado

```Javascript
  defaultLocale: 'es',
```

Luego coloamos los strings con `sails.__("...")` o `__("...")` 

Finalmente

Colocamos las traducciones en cada archivo correspondientes `config/locales`

