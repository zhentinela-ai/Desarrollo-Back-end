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

  '/': { action: 'view-inicio', locals: { layout: 'layouts/iniciado', titulo: 'Iniciado', tituloTabla: 'Artículos' } },
  '/hola': { action: 'view-inicio', locals: { layout: 'layouts/iniciado', titulo: 'Hola' } },
  // 'POST /api/v1/crear': { action: 'crear' },
  // 'PATCH /api/v1/editar': { action: 'editar' },
  // 'POST /api/v1/eliminar': { action: 'eliminar' },
  '/terminos-y-condiciones': { view: 'pages/terminos_y_condiciones' },
  '/acerca-de': { view: 'pages/acerca_de' },
  '/crear': { action: 'crear' },
  '/editar': { action: 'editar' },
  '/eliminar': { action: 'eliminar' },

  '/accion1': { action:'accion1' },
  '/accionUno': 'EjemploController.accionUno',
  '/accionDos': 'EjemploController.accionDos',


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
