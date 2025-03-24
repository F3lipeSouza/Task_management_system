const  listaTarefasConcluidas = require('../useCases/lista_tarefas_concluidas')


function listaTarefasConcluidasController(req, res){
    const tarefas = listaTarefasConcluidas.execute();
    return res.status(200).json(tarefas);
}

module.exports = { listaTarefasConcluidasController }