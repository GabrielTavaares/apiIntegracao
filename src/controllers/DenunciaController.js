const database = require("../database/connection")


class DenunciaController{

    novaDenuncia(request, response){
        const {tipo, comentario, status, oferta_id, estabelecimento_id} = request.body

        // console.log(tipo, comentario, status, oferta_id, estabelecimento_id)
        console.log(request.body);

        database.insert({tipo, comentario, status, oferta_id, estabelecimento_id}).table("denuncia").then(data => {
            console.log(data);
            response.json({message: "Denuncia feita com sucesso!"})
        }).catch(err => {
           response.json({error: err})
        })

    }


}

module.exports = new DenunciaController()