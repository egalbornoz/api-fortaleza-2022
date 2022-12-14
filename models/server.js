const express=require('express');
const cors=require('cors');

class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios'; 


        //Middleware
         this.middlewares();

         //CORS
          this.app.use(cors());

          //lectura y Parseo del body (Para serializar el objeto a json)
          this.app.use(express.json() );

        //Rutas de aplicaciones
        this.routes();
      }


middlewares(){
    //Directorio publico
    this.app.use(express.static('public'));
}
      routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
      }


      listen(){
      this.app.listen(this.port,()=>{
      console.log('Servidor on en puerto',this.port);
});
      }
}

module.exports=Server;