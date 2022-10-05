const alunoRoute = require('express').Router();
const e = require('express');
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

        const nome = req.body.nome
        const idade = req.body.idade
        const email = req.body.email
        const telefone = req.body.telefone

        if(nome === undefined || idade === undefined || email === undefined|| telefone===undefined ){
            res.json({mensagem: 'Erro! Alguns campos não foram definidos!'});  
        }else{
        if(await aluno.findOne({"email": email})!=null){
            res.json({mensagem: 'Erro no cadastro! Email já cadastrado!'}); 
        }else{
        await aluno.create(req.body);
        res.json({mensagem: 'Aluno cadastrado com sucesso!'});
        }}
    } catch (error) {
        res.json({mensagem: 'Erro no cadastro!'});
    }
});

//PUT - Atualiza um aluno específico pelo email, passando os dados pelo body
alunoRoute.put('/update-aluno/email=:email', async (req, res) => {
    try {

        const nome = req.body.nome
        const idade = req.body.idade
        const email = req.body.email
        const telefone = req.body.telefone

        if(nome === undefined && idade === undefined && email === undefined && telefone===undefined ){
            res.json({mensagem: 'Erro ao atualizar! Nenhum parâmetro encontrado!'}); 
        }else{
        if(await aluno.findOne({"email": email})!=null){
                res.json({mensagem: 'Erro ao atualizar! Email já existe!'});
        }else{
        await aluno.findOneAndUpdate({"email": req.params.email}, req.body, {new:true});
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
        }}
    } catch (error) {
        res.json({mensagem: 'Erro na atualização!'});
    }
});

//PUT - Atualiza um aluno específico pelo id, passando os dados pelo body
alunoRoute.put('/update-aluno/id=:id', async (req, res) => {
    try {
        
        const nome = req.body.nome
        const idade = req.body.idade
        const email = req.body.email
        const telefone = req.body.telefone

        if(nome === undefined && idade === undefined && email === undefined && telefone===undefined ){
            res.json({mensagem: 'Erro ao atualizar! Nenhum parâmetro encontrado!'}); 
        }else{
        if(await aluno.findOne({"email": email})!=null){
            res.json({mensagem: 'Erro ao atualizar! Email já existe!'});
        }else{
        await aluno.findOneAndUpdate({"_id": req.params.id}, req.body, {new:true});
        res.json({mensagem: 'Aluno atualizado com sucesso!'});
        }}
    } catch (error) {
        res.json({mensagem: 'Erro na atualização!'});
    }
});

//DELETE - Remove um aluno específico pelo email
alunoRoute.delete('/delete-aluno/email=:email', async (req, res) => {
    try {
      if(await aluno.findOne({"email": req.params.email})!=null){
        await aluno.deleteOne({"email": req.params.email});
        res.json({mensagem: 'Aluno removido com sucesso!'});
      }else{
        res.json({mensagem: 'Erro ao remover! Aluno não existe!'});
      } 
    
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

//DELETE - Remove um aluno específico pelo id
alunoRoute.delete('/delete-aluno/id=:id', async (req, res) => {
    try {
        if(await aluno.findOne({"_id": req.params.id})!=null){
            await aluno.deleteOne({"_id": req.params.id});
            res.json({mensagem: 'Aluno removido com sucesso!'});
          }else{
            res.json({mensagem: 'Erro ao remover! Aluno não existe!'});
          } 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão!'});
    }
});

module.exports = alunoRoute;
