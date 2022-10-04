const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AlunoSchema = Schema ({
    nome: String,
    idade: Number,
    email: String,
    telefone: String,
});

module.exports = mongoose.model("aluno", AlunoSchema);