const criaTarefa = require('../useCases/cria_task')

function criaTarefaController (req, res){
    const {titulo_tarefa, descricao_tarefa, prazo} = req.body;
    tarefa = criaTarefa.execute(titulo_tarefa, descricao_tarefa, prazo);
    return res.status(200).json('Tarefa criada com sucesso!!');
}


module.exports = { criaTarefaController }