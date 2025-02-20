const { Router } = require('express');
const { listaTarefasController } = require('./controllers/lista_tarefas_controller');
const { criaTarefaController } = require('./controllers/cria_task_controller');
const router = Router();

router.get('/', listaTarefasController);

router.post('/create_new_task', criaTarefaController);




module.exports = {router}
  