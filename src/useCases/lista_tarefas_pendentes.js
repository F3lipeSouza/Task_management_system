const { tarefasRepositories } = require("../repositories/tarefasRepositories");


function execute(){
    const tarefas = new tarefasRepositories();
    const tarefasPendentes = tarefas.filterUnDoneTasks()
    return tarefasPendentes;
}

module.exports = { execute }