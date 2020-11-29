const connection = require("../database/connection")
const express = require("express")
const router = express.Router()
const DenunciaController = require("../controllers/DenunciaController");
const OfertaController = require("../controllers/OfertaController");

router.post('/novaDenuncia', DenunciaController.novaDenuncia);
router.get("/ofertas", OfertaController.listaOferta);
router.get("/ofertas/:id", OfertaController.listaOfertaDetalhe);

module.exports = router