const criaTarefa = require('../useCases/cria_task')

function criaTarefaController (req, res){
    const {titulo_tarefa, descricao_tarefa, prazo, status} = req.body;
    const tarefa = criaTarefa.execute(titulo_tarefa, descricao_tarefa, prazo, status);
    return res.status(200).json('acho que foi');
}


module.exports = { criaTarefaController }