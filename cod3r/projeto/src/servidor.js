const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getPtodutos()) // converte automaticamente para JSON
})

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getPtoduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.params.nome,
    preco: req.params.preco
  })
  res.send(produto)
})

app.delete('produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`)
})
