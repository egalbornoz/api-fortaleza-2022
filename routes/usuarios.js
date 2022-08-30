const { Router }= require('express');
const { usuariosGet,
        usuariosPut, 
        usuariosPost,
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

/**-----------------------------------------------------------
 *     RUTAS PARA GET DEL USUARIOS
 ------------------------------------------------------------*/
router.get('/', usuariosGet);

/**-----------------------------------------------------------
 *     RUTAS PARA PUT DEL USUARIOS
 ------------------------------------------------------------*/
router.put('/:id',usuariosPut);

/**-----------------------------------------------------------
 *     RUTAS PARA POST DEL USUARIOS
 ------------------------------------------------------------*/
router.post('/',usuariosPost);
/**-----------------------------------------------------------
 *     RUTAS PARA DELETE DEL USUARIOS
 ------------------------------------------------------------*/
router.delete('/',usuariosDelete);



/**-----------------------------------------------------------
 *       EXPORT DE RUTAS USUARIOS
 ------------------------------------------------------------*/
module.exports=router;