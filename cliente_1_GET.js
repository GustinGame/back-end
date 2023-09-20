// client.js

const axios = require('axios');
const baseURL = 'http://localhost:5000';
async function main() {
  try {
    // GET
    console.log();
    const responseGetAll = await axios.get(`${baseURL}/plataforma`);
    console.log('GET Todos os Itens:', responseGetAll.data);
  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}
main();