// id: autogerado e obrigatório
// nome: texto e obrigatório
// endereço: texto e obrigatório ->
// bairro: texto e obrigatório
// horario de funcionamento
// email: obrigatorio formato
// criadoEm: data gerada automaticamente e obrigatório
// categoria: referencia da categoria cadastrada previamente obrigatório

const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nomeFantasia: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    horarioFuncionamento: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
        match : /.+\@.+\..+/,
        unique: true
    },
    categoria:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('shop', shopSchema)