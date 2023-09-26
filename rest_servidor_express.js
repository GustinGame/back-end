// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
// Dados para testes
let cadrastro = [
  { id: 1, nome: 'Item 1', pedido: "cadrastrar" },
  { id: 2, nome: 'Item 2', pedido: "alterar" },
  { id: 3, nome: 'Item 3', pedido: "cadrastrar" },
];

// Rota para obter todos os itens
app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/plataforma', (req, res) => {
  console.log(cadrastro);
  res.json(cadrastro);
})

// Rota para obter um item por ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  res.json(item);
});

// Rota para criar um novo itemb 
app.post('/plataforma', (req, res) => {
  console.log('ID: ', req.body.id, ' - NOME: ', req.body.nome, ' - PEDIDO: ', req.body.pedido);
  if (req.body.pedido.toUpperCase() == 'CADRASTRAR') {
    const newItem = req.body;
    newItem.id = cadrastro.length + 1;
    console.log('cadrastrar: ', newItem);
    cadrastro.push(newItem);
    console.log(cadrastro);
    res.status(201).json(newItem);
  } else {
    console.log("mensagem incorreta");
    res.status(201).json("Mensagem incorreta");
  }

});

// Rota para atualizar um item por ID
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  data[index] = { ...data[index], ...updatedItem };
  res.json(data[index]);
});


// Rota para excluir um item por ID
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  const deletedItem = data.splice(index, 1)[0];
  res.json(deletedItem);
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}...`);
});