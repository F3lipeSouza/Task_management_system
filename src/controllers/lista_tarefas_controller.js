const listaTarefas = require('../useCases/lista_tarefas')

function listaTarefasController (req, res){
    const tarefas = listaTarefas.execute();
    return res.json(tarefas);
}


module.exports = { listaTarefasController }