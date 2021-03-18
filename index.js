const express = require("express");
const router = require("./src/routes/routes");

const app = express();

var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000, () => {
    console.log("Funcionou na porta 4000")
})

app.get('/', (request, response) => {
    response.send("Bem vendo a API de integração")
})
