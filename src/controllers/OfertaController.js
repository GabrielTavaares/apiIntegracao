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

        database.select().table('oferta').where('id', id.id).join('estabelecimento', {'estabelecimento.id_estabelecimento': 'oferta.estabelecimento_id'}).then( data => {  

            
            response.json(data)

            var atualizaContagem = data[0].qtd_visualizacao + 1

            

            database.table('oferta').where('id', id.id).update({'qtd_visualizacao': atualizaContagem}, ['id', 'qtd_visualizacao']).then(data2 => {
                // console.log(data2)
            }).catch(error => {
                console.log(error)
            })

            
            // const atualizaContagem = data[0].qtd_visualizacao

            // console.log( data[0].qtd_visualizacao)

        }).catch(error => {
            response.json(error)
            console.log(error)
        })

    }


    

    

}

module.exports = new OfertaController()