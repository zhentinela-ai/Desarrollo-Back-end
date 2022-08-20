```Javascript

const nuevo = await Usuario.create({
})

nombre: {
  type: 'string',
  required: true
},

const nuevo = await Usuario.create({
      nombre: "E"
    })

nombre: {
  type: 'string',
  required: true,
  minLength: 2
},

const nuevo = await Usuario.create({
      nombre: "Eduardo"
    })

email: {
  type: 'string',
  required: true
},

const nuevo = await Usuario.create({
      nombre: "Carlos"
    })


const nuevo = await Usuario.create({
      nombre: "Carlos",
      email: "carlos"
    })


email: {
  type: 'string',
  required: true,
  isEmail: true
},

const nuevo = await Usuario.create({
      nombre: "Juan",
      email: "juan@email.com"
    })


```
