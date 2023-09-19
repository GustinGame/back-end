// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function main() {
  try {
    // GET todos
    var responseGetAll = await axios.get(`${baseURL}/items`);
    console.log();
    console.log('GET Todos os Itens:', responseGetAll.data);

    // GET somente um item
    var itemId = 2;
    responseGetById = await axios.get(`${baseURL}/items/${itemId}`);
    console.log();
    console.log(`GET Item por ID ${itemId}:`, responseGetById.data);

    // POST
    const newItem = { id: 0, nome: 'Novo Item' };
    const responsePost = await axios.post(`${baseURL}/items`, newItem);
    console.log();
    console.log('POST Novo Item:', responsePost.data);

    // PUT
    const updatedItem = { nome: 'Item Atualizado' };
    const responsePut = await axios.put(`${baseURL}/items/${itemId}`, updatedItem);
    console.log();
    console.log(`PUT Atualizar Item ${itemId}:`, responsePut.data);

    // DELETE
    itemId = 4;
    const responseDelete = await axios.delete(`${baseURL}/items/${itemId}`);
    console.log();
    console.log(`DELETE Excluir Item ${itemId}:`, responseDelete.data);

    // GET todos
    responseGetAll = await axios.get(`${baseURL}/items`);
    console.log();
    console.log('GET Todos os Itens:', responseGetAll.data);

  } catch (error) {
    console.log();
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
