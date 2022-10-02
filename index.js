const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const alunoRouter = require('./router/alunoRouter');

// mongoose.connect(process.env.URL_DB)

//Conexão com DB
try{
    // mongoose.connect(process.env.URL_DB);
    mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.sphd7pi.mongodb.net/?retryWrites=true&w=majority");
} catch (error) {
    console.log("Erro durante a conexão com MongoDB");
}


app.use(express.json());
app.use(cors());

app.use(alunoRouter);

// app.get('/Aluno', (req, res) => {
//     res.json([
//         {nome: "Amélia"},
//         {idade: 13}
//     ])
// })

app.listen(3000)