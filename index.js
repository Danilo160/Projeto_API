const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const alunoRoute = require('./api/routes/alunoRoute');

//Conectando ao mongoDB

try{

    /*Crie o .env e adicione: 
    DB_STR_CON = 'mongodb+srv://mongodb:mongodb@cluster0.sphd7pi.mongodb.net/?retryWrites=true&w=majority'
    Ou descomente a seguinte linha*/

    //mongoose.connect(process.env.DB_STR_CON);

    mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.sphd7pi.mongodb.net/?retryWrites=true&w=majority');
    
} catch (error) {
    console.log("Erro durante a conexão com MongoDB");
}

app.use(express.json());
app.use(cors());

//Rota de aluno
app.use(alunoRoute);

app.listen(3000, () => {
    console.log('Api funcionando!')
});