const { tarefasRepositories } = require('../repositories/tarefasRepositories');

function execute(id){
    const tarefa = new tarefasRepositories();
    const tarefaPendente = tarefa.unmarkDoneTask(id)
}

module.exports = { execute }