const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const alunoRoute = require('./api/routes/alunoRoute');

const page = ('<center> \
               <h1>Bem vindo(a) à API REST de alunos!</h1>\
               <h2>\
               <a href="" \
               target="_blank">\
               Consultar Documentação\
               <a></h2>\
               </center')
              
//Conectando ao mongoDB

try{
    mongoose.connect(process.env.DB_STR_CON);
    
} catch (error) {
    console.log("Erro durante a conexão com MongoDB");
}

app.use(express.json());
app.use(cors());

//Rota de aluno
app.use(alunoRoute);

app.get('/', (req, res) => {
    res.send(page);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Api funcionando!')
});