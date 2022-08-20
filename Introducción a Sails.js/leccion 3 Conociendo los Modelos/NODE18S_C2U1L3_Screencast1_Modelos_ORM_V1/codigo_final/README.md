```Javascript

    yarn add sails-postgresql --save

    modos ENV

    datastore

    adapter: require('sails-postgresql'),
    url: 'postgresql://root:123123@localhost:5432/tienda',


    models

    migrate: 'safe',

    // createdAt: { type: 'number', autoCreatedAt: true, },
    // updatedAt: { type: 'number', autoUpdatedAt: true, },

    sails generate model Vendedor nombre:string desde:number

```
