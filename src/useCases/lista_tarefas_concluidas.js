const { tarefasRepositories } = require("../repositories/tarefasRepositories");


function execute(){
    const tarefas = new tarefasRepositories();
    const tarefasConcluidas = tarefas.filterDoneTasks()
    return tarefasConcluidas;
}

module.exports = { execute }