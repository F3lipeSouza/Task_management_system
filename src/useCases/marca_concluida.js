const { tarefasRepositories } = require('../repositories/tarefasRepositories');

function execute(id){
    const tarefa = new tarefasRepositories();
    const tarefaConcluida = tarefa.markDoneTask(id)
}

module.exports = { execute }