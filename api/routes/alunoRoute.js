const alunoRoute = require('express').Router();
const aluno = require('../models/alunoModel');

//GET ALL
alunoRoute.get('/aluno', async (req, res) => {
    try {
        const result = await aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//GET ID 
alunoRoute.get('/aluno/:id', async (req, res) => {
    try {
        const result = await aluno.findOne({email: req.params.email});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//POST
alunoRoute.post('/aluno', async (req, res) => {
    try {
        await aluno.create(req.body);
        res.json({mensagem: 'Aluno cadastrado com sucesso!'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro!'});
    }
});

//PUT
alunoRoute.put('/aluno', async (req, res) => {
    try {
        await aluno.updateOne({email: req.body.email}, req.body);
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualiazação!'});
    }
});

//DELETE
alunoRoute.delete('/aluno', async (req, res) => {
    try {
        await aluno.deleteOne({email: req.body.email});
        res.json({mensagem: 'Aluno removido com sucesso!'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

module.exports = alunoRoute;
