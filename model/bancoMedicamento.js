const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('medicamento', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+erro)
})

// criar tabelas diretamente no node para o banco de dados

const Medicamento = sequelize.define('Medicamento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mg: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    dataVencimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

// Medicamento.sync() // conexão para criação a tabela
// .then(() => {
//     console.log('Tabela de medicamento criado com Sucesso!')
// })
// .catch(error => {
//     consokle.log(`Erro ao criar tabela, ${error}`)
// })


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    }
})

// Usuario.sync() // cria a tabela do usuario
//     .then(() =>{
//         console.log('Tabela Criada com sucesso!')
//     })
//     .catch(erro => 
//         console.log(`Erro na criação da tabela, ${erro}`)
//     )

// Usuario.create({
//     nome: 'Matheus Willam',
//     sobrenome: 'Oliveira',
//     idade: 31,
//     email: 'blabla@hotmail.com'
// })

exports.criarMedicamento = (medicamento) => {// aqui retorno a lista
    const { nome, mg , descricao, dataVencimento } = medicamento

    const resultado = Medicamento.create({
        nome: nome,
        mg: mg,
        descricao: descricao,
        dataVencimento: dataVencimento
    })
  
}

async function medicamentoPorId(id) {
    try{
        return await Medicamento.findByPk(id)
        
    }catch(e){
        console.log('Deu algo de errado no banco: ' + e)
    }
}


async function upMedicamento(id) {
    try{ 
        console.log('Medicamento encontrado e atualizado')
        return await Medicamento.update(id)
        
    }catch(e) {
        console.log('Erro na atualização: ' + e)
    }

}

module.exports = {
    medicamentoPorId,
    upMedicamento
}

