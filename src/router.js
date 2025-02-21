const { Router } = require('express');
const { listaTarefasController } = require('./controllers/lista_tarefas_controller');
const { criaTarefaController } = require('./controllers/cria_task_controller');
const { marcaTarefaConcluidaController } = require('./controllers/marca_concluida_controller');
const { marcaTarefaNaoConcluidaController } = require('./controllers/desmarca_concluida');
const router = Router();

router.get('/', listaTarefasController);

router.post('/create_new_task', criaTarefaController);

router.put('/conclui_tarefa', marcaTarefaConcluidaController);

router.put('/adiciona_pendente', marcaTarefaNaoConcluidaController);



module.exports = {router}
  