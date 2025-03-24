const { Router } = require('express');
const { listaTarefasController } = require('./controllers/lista_tarefas_controller');
const { criaTarefaController } = require('./controllers/cria_task_controller');
const { marcaTarefaConcluidaController } = require('./controllers/marca_concluida_controller');
const { marcaTarefaNaoConcluidaController } = require('./controllers/desmarca_concluida');
const { listaTarefasConcluidasController } = require('./controllers/lista_tarefas__concluidas_controller');
const { listaTarefasPendentesController } = require('./controllers/lista_tarefas_pendentes');
const router = Router();

router.get('/', listaTarefasController);

router.post('/create_new_task', criaTarefaController);

router.put('/conclui_tarefa', marcaTarefaConcluidaController);

router.put('/adiciona_pendente', marcaTarefaNaoConcluidaController);

router.get('/tarefas_concluidas', listaTarefasConcluidasController);

router.get('/tarefas_pendentes', listaTarefasPendentesController);


module.exports = {router}
  