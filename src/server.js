const { app } = require('./app');
const port = 5500;

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
});

