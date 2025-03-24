const  listaTarefasPendentes = require('../useCases/lista_tarefas_pendentes')


function listaTarefasPendentesController(req, res){
    const tarefas = listaTarefasPendentes.execute();
    return res.status(200).json(tarefas);
}

module.exports = { listaTarefasPendentesController }