const { response, request } = require('express');

// QUERY PARAMETERS
// http://localhost:8080/api/usuarios ?nombre=David&id=2019&edad=25&page=20&limit=50 
const usuariosGET = (req = request, res = response) => {
    const { nombre = 'No name', id, edad, page = 1, limit = 10} = req.query;
    res.json({
        msg: 'UsuariosGET OK from controller',
        nombre,
        id,
        edad,
        page,
        limit
    });
};

// OBTENER LOS DATOS DE UN POST
// JSON body
// http://localhost:8080/api/usuarios
const usuariosPOST = (req, res = response) => {
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'UsuariosPOST Ok from controller',
        nombre,
        edad
    });
}

// PATH PARAMETERS: POST, PUT, DELETE
// http://localhost/api/usuarios/10 
const usuariosPUT = (req, res = response) => {
    const id = req.params.id;
    // const { id } = req.params;
    res.json({
        msg: 'UsuariosPUT Ok from controller',
        id
    });
}

const usuariosDELETE = (req, res = response) => {
    res.json({
        msg: 'usuariosDELETE OK from controller'
    });
}

module.exports = {
    usuariosGET,
    usuariosPOST, 
    usuariosPUT,
    usuariosDELETE
}