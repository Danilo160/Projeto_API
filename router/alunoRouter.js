const aluno = require('../data/Aluno');
const AlunoRouter = require('express').Router();

// AlunoRouter.get('/aluno', async (res, req) => {
//     const result = await aluno.find({});
//     res.json(result);
// });

// AlunoRouter.post('/aluno', async (res, req) => {
//     await aluno.create(req.body);
//     res.json({mensagem: "Aluno inserido"})
// });

AlunoRouter.get('/aluno', async (res, req) => {
    try {
        const result = await aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Erro na busca'});
    }
});

AlunoRouter.post('/aluno', async (res, req) => {
    try{
        await aluno.create(req.body);
        res.json({mensagem: "Aluno inserido"});
    } catch (error){
        res.json({mensagem: "Erro no cadastro"});
    }
})

module.exports = AlunoRouter;