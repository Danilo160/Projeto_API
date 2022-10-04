const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const alunoRoute = require('./api/routes/alunoRoute');

//Conteúdo da página raiz
const page = ('<center><body style = "align-items: center;\
               display: flex;\
               flex-direction: row;\
               flex-wrap: wrap;\
               justify-content: center;">\
               <h1>Bem vindo(a) à API REST de alunos!</h1>\
               <br></br>\
               <h2>\
               <a href="https://documenter.getpostman.com/view/23678062/2s83tJGW9D#e9a8783b-75b5-488b-aecc-a3cc69a9791c" \
               target="_blank">\
               Consultar Documentação\
               <a>\
               <p></p>\
               <a href="https://github.com/alencarol/Projeto_API.git" \
               target="_blank">\
               Projeto no GitHub\
               <a></h2>\
               <br></br>\
               <i><h2>Criadores:</h2>\
               <h4>Adriano Gutemberg de Alencar Santos</h4>\
               <h4>Danilo Correia Viana</h4>\
               <h4>Ingrid Carolina de Alencar</h4></i>\
               </body><center>') 
              
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

//Página raiz
app.get('/', (req, res) => {
    res.send(page);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Api funcionando!')
});