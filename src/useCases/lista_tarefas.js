const { tarefasRepositories } = require('../repositories/tarefasRepositories');

function execute(){
    const tarefas = new tarefasRepositories();
    const listaTarefas = tarefas.findAll();
    return listaTarefas;

}

module.exports = { execute }