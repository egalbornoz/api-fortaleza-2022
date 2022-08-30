const { response } =  require('express');


/**-----------------------------------------------------------
 *     END-POINT GET PARA USUARIOS
 ------------------------------------------------------------*/
const usuariosGet = (req,res = response)=>{

    const query=req.query;

    res.json({
        msg:'get API- Controller'
    });
}
/**-----------------------------------------------------------
 *     END-POINT PUT PARA USUARIOS
 ------------------------------------------------------------*/
const usuariosPut=(req,res = response)=>{

    const id = req.params.id;
    const {ced}=req.body;
    res.json({
        msg:'put API- Controller',
        ced,
        id
 });
}
/**-----------------------------------------------------------
 *     END-POINT POST PARA USUARIOS
 ------------------------------------------------------------*/
const usuariosPost = (req,res = response)=>{

    const {nombre,id} = req.body;
    res.json({
        msg:'post API- Controller',
        nombre,
        id
    });
}

/**-----------------------------------------------------------
 *     END-POINT DELETE PARA USUARIOS
 ------------------------------------------------------------*/
const usuariosDelete = (req,res = response)=>{
    res.json({
        msg:'delete API- Controller'
    });
}


/**-----------------------------------------------------------
 *     EXPORT DE END-POINT USUARIOS
 ------------------------------------------------------------*/
module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
}