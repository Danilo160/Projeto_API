const alunoRoute = require('express').Router();
const aluno = require('../models/alunoModel');

//GET ALL - Lista todos os alunos cadastrados
alunoRoute.get('/all-alunos', async (req, res) => {
    try {
        const result = await aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//GET - Lista apenas um aluno específico pelo email
alunoRoute.get('/aluno/email=:email', async (req, res) => {
    try {
        const result = await aluno.findOne({"email": req.params.email});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//GET - Lista apenas um aluno específico pelo id
alunoRoute.get('/aluno/id=:id', async (req, res) => {
    try {
        const result = await aluno.findOne({"_id": req.params.id});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca!'});
    }
});

//POST - Cadastra um novo aluno, passando os dados pelo body
alunoRoute.post('/add-aluno', async (req, res) => {
    try {
        if(Object.values(req.body).length===0){
            res.json({mensagem: 'Erro! Objeto vazio!'}); 
        }else{
        await aluno.create(req.body);
        res.json({mensagem: 'Aluno cadastrado com sucesso!'});
        }
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro!'});
    }
});

//PUT - Atualiza um aluno específico pelo email, passando os dados pelo body
alunoRoute.put('/update-aluno/email=:email', async (req, res) => {
    try {
        if(Object.values(req.body).length===0){
            res.json({mensagem: 'Erro! Objeto vazio!'}); 
        }else{
        await aluno.findOneAndUpdate({"email": req.params.email}, req.body, {new:true});
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
        }
    } catch (error) {
        res.json({mensagem: 'Erro na atualiazação!'});
    }
});

//PUT - Atualiza um aluno específico pelo id, passando os dados pelo body
alunoRoute.put('/update-aluno/id=:id', async (req, res) => {
    try {
        if(Object.values(req.body).length===0){
            res.json({mensagem: 'Erro! Objeto vazio!'}); 
        }else{
        await aluno.findOneAndUpdate({"_id": req.params.id}, req.body, {new:true});
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
        }
    } catch (error) {
        res.json({mensagem: 'Erro na atualiazação!'});
    }
});

//DELETE - Remove um aluno específico pelo email
alunoRoute.delete('/delete-aluno/email=:email', async (req, res) => {
    try {
        await aluno.deleteOne({"email": req.params.email});
        res.json({mensagem: 'Aluno removido com sucesso!'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

//DELETE - Remove um aluno específico pelo id
alunoRoute.delete('/delete-aluno/id=:id', async (req, res) => {
    try {
        await aluno.deleteOne({"_id": req.params.id});
        res.json({mensagem: 'Aluno removido com sucesso!'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

module.exports = alunoRoute;
