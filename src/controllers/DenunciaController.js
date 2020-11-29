const database = require("../database/connection")


class DenunciaController{

    novaDenuncia(request, response){
        const {tipo, comentario, status, data_denuncia, oferta_id, estabelecimento_id} = request.body

        console.log(tipo, comentario, status, data_denuncia, oferta_id, estabelecimento_id)

        database.insert({tipo, comentario, status, data_denuncia}).table("denuncia").then(data => {
            console.log(data);
            response.json({message: "Denuncia feita com sucesso!"})
        }).catch(err => {
            console.log(err )
        })

    }


}

module.exports = new DenunciaController()