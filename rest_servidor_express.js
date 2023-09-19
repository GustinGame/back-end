// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Dados para testes
let data = [
  { id: 1, nome: 'Item 1' },
  { id: 2, nome: 'Item 2' },
  { id: 3, nome: 'Item 3' },
];

// Rota para obter todos os itens
app.get('/api/items', (req, res) => {
  res.json(data);
});

// Rota para obter um item por ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  res.json(item);
});

// Rota para criar um novo item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem); // Insere novo elemento na lista
  console.log("mensagem: ", req.body);
  console.log("id: ", req.body.id, "  nome: ", req.body.nome);
  res.status(201).json(newItem);
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