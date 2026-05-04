// src/routes/peliculas.js
const { Router } = require('express')

const router = Router()
const verificarToken = require('../middleware/verificarToken')
const verificarRol = require('../middleware/verificarRol')

const {
  listarPeliculas,
  obtenerPelicula,
  buscarPorDirector,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
  listarResenas,
  crearResena,
  modificarPelicula,
  obtenerPorPaginacion
} = require('../controllers/peliculasController')


// Rutas de películas sin verificación de token
// router.get('/buscar', buscarPorDirector);
// router.get('/', listarPeliculas)
// router.get('/:id', obtenerPelicula)
// router.post('/', crearPelicula)
// router.put('/:id', actualizarPelicula)
// router.delete('/:id', eliminarPelicula)

// Rutas públicas
router.get('/', listarPeliculas)
router.get('/:id', obtenerPelicula)
router.get('/:id/resenas', listarResenas)

// Rutas protegidas: cualquier usuario autenticado
router.post('/', verificarToken, crearPelicula)
router.post('/:id/resenas', verificarToken, crearResena)

// Rutas protegidas: solo admin
router.put('/:id', verificarToken, verificarRol('admin'), actualizarPelicula)
router.delete('/:id', verificarToken, verificarRol('admin'), eliminarPelicula)


module.exports = router