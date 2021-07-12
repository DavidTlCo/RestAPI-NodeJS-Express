const { Router } = require('express');
const router = Router();

const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controllers/usuarios.controllers');

// Obtain data 
router.get('/', usuariosGET );

// Add data
router.post('/', usuariosPOST );

// Update data
router.put('/:id', usuariosPUT);

// Delete data
router.delete('/', usuariosDELETE);

module.exports = router;