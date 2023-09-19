// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function main() {
  try {
    // DELETE
    console.log();
    var itemId = 4;
    const responseDelete = await axios.delete(`${baseURL}/items/${itemId}`);
    console.log(`DELETE Excluir Item ${itemId}:`, responseDelete.data);
    console.log();
    
    // GET todos
    const responseGetAll = await axios.get(`${baseURL}/items`);
    console.log('GET Todos os Itens:', responseGetAll.data);

  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
