const alunoRoute = require('express').Router();
const aluno = require('../models/alunoModel');

/*O email não fui utilizado como identificador, pois pode ser necessário atualizá-lo*/

//GET ALL - Lista todos os alunos cadastrados
alunoRoute.get('/aluno', async (req, res) => {
    try {
        const result = await aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//GET ID - Lista apenas um aluno específico pelo _id
alunoRoute.get('/aluno/:id', async (req, res) => {
    try {
        const result = await aluno.findOne({"_id": req.params.id});
        res.json(result);

    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//POST - Cadastra um novo aluno
alunoRoute.post('/aluno', async (req, res) => {
    try {
        await aluno.create(req.body);
        res.json({mensagem: 'Aluno cadastrado com sucesso!'});
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro!'});
    }
});

//PUT - Atualiza um aluno específico pelo _id
alunoRoute.put('/aluno/:id', async (req, res) => {
    try {
        await aluno.findOneAndUpdate({"_id": req.params.id}, req.body, {new:true});
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
    } catch (error) {
        res.json({mensagem: 'Erro na atualiazação!'});
    }
});

//DELETE - Remove um aluno específico pelo _id
alunoRoute.delete('/aluno/:id', async (req, res) => {
    try {
        await aluno.deleteOne({"_id": req.params.id});
        res.json({mensagem: 'Aluno removido com sucesso!'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

module.exports = alunoRoute;
