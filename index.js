const express = require('express');
const path = require('path')
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const alunoRoute = require('./api/routes/alunoRoute');

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
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Api funcionando!')
});