var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      // por padrão localhost
        user : 'root',    //      -> por padrão root
        password : '',  // -> sua senha definida
        database : 'ofertanamao2'       //-> nome do seu banco criado
     }
});

module.exports = knex