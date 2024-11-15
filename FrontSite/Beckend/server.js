const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'CasaDaPaz'
});

// Conexão com o banco
db.connect(err => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL!');
  }
});

// Rota de teste
app.get('/api/test', (req, res) => {
  res.send('Backend está funcionando!');
});

// Rota para buscar dados
app.get('/api/fotos', (req, res) => {
  const query = 'SELECT "foto" FROM fotos'; // Ajuste a tabela conforme necessário
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
