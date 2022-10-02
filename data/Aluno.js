const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
    nome: String,
    idade: Number,
    email: String,
    telefone: String
});

mongoose.export = mongoose.model("Aluno", AlunoSchema);