const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API do desafio Lidercap! Use /api/users/[id] para acessar os dados.');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

module.exports = app;
