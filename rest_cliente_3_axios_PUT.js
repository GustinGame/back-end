// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function main() {
  try {
    // PUT
    console.log();

    const updateddata = [
      { id: 1, nome: "testando" }
      { id: 2, nome: "test2" }
      { id: 3, nome: "test3" }
    ]

    var itemId = 3;
    const updatedItem = { nome: 'Item Atualizado' };
    const responsePut = await axios.put(`${baseURL}/items/${itemId}`, updatedItem);
    console.log(`PUT Atualizar Item ${itemId}:`, responsePut.data);
    console.log();

    // GET todos
    const responseGetAll = await axios.get(`${baseURL}/items`);
    console.log('GET Todos os Itens:', responseGetAll.data);

  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
