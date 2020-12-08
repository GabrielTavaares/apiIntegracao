const database = require("../database/connection")


class OfertaController{

    listaOferta(request, response){
        database.select().table('oferta').where('status', 'A').then( data => {
           
            response.json(data)
    
        }).catch(error => {
            response.json(error)
            console.log(error)
        })
    }
    
    listaOfertaUnica(request, response){
            
        const id = request.params

        console.log(id)

        database.select().table('oferta').where(`id`, id.id).join('estabelecimento', {'estabelecimento.id_estabelecimento': 'oferta.estabelecimento_id'}).then( data => {  

            response.json(data)

            console.log(data)

        }).catch(error => {
            response.json(error)
            console.log(error)
        })

    }


    

    

}

module.exports = new OfertaController()