// client.js

const axios = require('axios');

const baseURL = 'http://localhost:5000';

async function main() {
  try {
    // POST
    console.log();
    const mensagem = { id: 0, nome: 'Juca', pedido: 'cadrastrar' };
    const responsePost = await axios.post(`${baseURL}/plataforma`, mensagem);
    console.log('POST Novo Item:', responsePost.data);
    console.log();
  } catch (error) {
    console.error('Erro:', error.response ? error.response.data : error.message);
  }
}

main();
