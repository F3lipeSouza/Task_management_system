const { tarefasRepositories } = require('../repositories/tarefasRepositories');

function execute(titulo_tarefa, descricao_tarefa, prazo, status){
    const tarefa = new tarefasRepositories();
    const criaTarefa = tarefa.createTask(titulo_tarefa, descricao_tarefa, prazo, status);
}

module.exports = { execute }
