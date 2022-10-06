# Projeto_API 

Projeto de desenvolvimento de API REST como requisito da disciplina de Projeto de Sistema Web II do IFCE-Crato.

## Como funciona

A API tem o objetivo de fornecer rotas para operações de CRUD de dados de alunos. Para isso, foi desenvolvida em JavaScript (node.js) utilizando o MongoDB para armazenar os dados.

## Como usar

1. Faça o clone do repositório e crie um arquivo **.env** conforme o TEMPLATE.env, com suas credenciais de um banco de dados do (https://www.mongodb.com/)

2. Para subir o servidor execute o comando `node index.js` no terminal e acesse as rotas:

    - /all-alunos: para consultar todos os alunos cadastrados no banco
    - /aluno/email=email: para consultar um aluno pelo email
    - /aluno/id=id: para consultar um aluno pelo id
    - /add-aluno: para inserir um aluno no banco
    - /update-aluno/email=email: para atualizar um aluno pelo email
    - /update-aluno/id=id: para atualizar um aluno pelo id
    - /delete-aluno/email=email: para remover aluno pelo email
    - /delete-aluno/id=id: para remover aluno pelo id

    Para mais informações acesse a [documentação](https://documenter.getpostman.com/view/23678062/2s83tJGW9D#e9a8783b-75b5-488b-aecc-a3cc69a9791c)
