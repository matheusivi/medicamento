const modelMedicamento = require('../model/bancoMedicamento.js')
const { medicamentoPorId } = require('../model/bancoMedicamento.js')
const { upMedicamento } = require('../model/bancoMedicamento.js')
exports.buscaGeralMedicamento =  (req, res) => {// aqui retorno a lista
    res.status(200).send(medicamento)
}

exports.buscaMedicamentoPorId = async (req, res) => {
    const { id } = req.params; // aqui pego apenas o id
    try{
    const medicamento = await medicamentoPorId(id)

    if (!medicamento) {
     return res.status(400).send({message: 'Medicamento não encontrado'})
    }

    res.status(200).send(medicamento)
    }catch(e) {
        res.status(500).send({message: 'Erro ao buscar medicamento'})
    }
   
 }


exports.adicionarMedicamento = async (req, res) => {
    console.log(req.body)
    const { nome, mg , descricao, dataVencimento } = req.body

    if(!req.body.nome || !req.body.descricao) {
        res.status(400).send({ message: 'Nome e descrição são obrigatórios'})
    }

    modelMedicamento.criarMedicamento({nome, mg, descricao, dataVencimento}) 
 
    res.status(200).send({message: `Medicamento ${nome} adicionado com sucesso`})

}

exports.atualizarMedicamento = async (req, res) => {
    const { id } = req.params
    const { nome, descricao, mg, dataVencimento } = req.body
    const medicamento = await upMedicamento(id)

    if( !nome || !descricao) {
        res.status(400).send({message: `Não existe esta posição` })
    }

    medicamento.nome = nome || medicamento.nome
    medicamento.descricao = descricao || medicamento.descricao
    medicamento.mg = mg || medicamento.mg
    medicamento.dataVencimento = dataVencimento || medicamento.dataVencimento

    res.status(200).send({message: `Medicamento atualizado com sucesso.`})
}



exports.excluirMedicamento = (req, res) => {
    const { id } = req.params
    const medicamento = medicamentos.find(m => m.id == id)

    if ( index == -1){
        res.status(400).send({message: 'Medicamento deletado com sucesso'})
    }

    medicamento.splice(index, 1);
    res.status(200).send({message: 'Medicamento deletado com sucesso!'})
}