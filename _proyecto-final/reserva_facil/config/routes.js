/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // Rutas de espectador
  '/': { action: 'view-espectador', locals: { layout: 'layouts/espectador.ejs' } },

  // Rutas reservas
  'GET /reservas': { action: 'view-reserva', locals: { layout: 'layouts/espectador.ejs' } },
  'POST /reservas': { action: 'view-reserva', locals: { layout: 'layouts/espectador.ejs' } },
  'POST /reservas/crear-reserva': { action: 'reserva', locals: { layout: 'layouts/espectador.ejs' } },

  // Rutas de administrador
  'GET /admin': { action: 'view-admin', showLogout: false, locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin': { action: 'admin', locals: { layout: 'layouts/admin.ejs' } },
  'GET /admin/principal': { action: 'view-principal', locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin/principal/:admin': { action: 'view-principal', locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin/principal/': { action: 'editar-evento', locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin/principal/crear-evento': { action: 'crear-evento', locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin/principal/eliminar-evento': { action: 'eliminar-evento', locals: { layout: 'layouts/admin.ejs' } },

  // Routas para la sesión
  'POST /login':              'SesionController.login',
  'POST /logout':             'SesionController.logout',

  // Rutes de funciones
  'POST /admin/principal/crear-funcion': { action: 'crear-funcion', locals: { layout: 'layouts/admin.ejs' } },
  'POST /admin/principal/eliminar-funcion': { action: 'eliminar-funcion', locals: { layout: 'layouts/admin.ejs' } },

  'GET /entidad-relacion': { action: 'view-entidad-relacion' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
