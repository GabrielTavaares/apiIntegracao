const database = require("../database/connection")


class OfertaController{

    listaOferta(request, response){
        database.select("*").where({status: 'A'}).table("oferta").then( data => {
            console.log(data);
            response.json(data);

        }).catch(error => {
            response.json(error);
            console.log(error);
        })
    }
    listaOfertaDetalhe(request, response){
        const id = request.params

        database.select("*").where({id:id}).table("oferta").then( data => {
            console.log(data)
            response.json(data)

        }).catch(error => {
            response.json(error)
            console.log(error)
        })
    }

    

}

module.exports = new OfertaController()