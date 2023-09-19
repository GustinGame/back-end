// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000/api';

async function main() {
  try {
    // GET todos
    console.log();
    const responseGetAll = await axios.get(`${baseURL}/items`);
    console.log('GET Todos os Itens:', responseGetAll.data);
    console.log()
    // GET somente um item
    itemId = 2;
    const responseGetById = await axios.get(`${baseURL}/items/${itemId}`);
    console.log(`GET Item por ID ${itemId}:`, responseGetById.data);
    console.log("funcionando!!!!!")

  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
