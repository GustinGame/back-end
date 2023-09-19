// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function main() {
  try {
    // POST
    console.log();
    const newItem = { id: 0, nome: 'teste de mensagem' };
    const responsePost = await axios.post(`${baseURL}/items`, newItem);
    console.log('POST Novo Item:', responsePost.data);
    console.log();

    // GET todos
    responseGetAll = await axios.get(`${baseURL}/items`);
    console.log('GET Todos os Itens:', responseGetAll.data);

  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
