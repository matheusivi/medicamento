const express = require('express');
const route = express.Router();
const controllerMedicamento = require('../controllers/controllerMedicamento.js')


route.get('/medicamento', controllerMedicamento.buscaGeralMedicamento)
route.get('/medicamento/:id', controllerMedicamento.buscaMedicamentoPorId)
route.post('/medicamento', controllerMedicamento.adicionarMedicamento )
route.put('/medicamento/:id', controllerMedicamento.atualizarMedicamento)
route.delete('/medicamento/:id', controllerMedicamento.excluirMedicamento)

module.exports = route