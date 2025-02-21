const marcaTarefaConcluida = require('../useCases/marca_concluida')

function marcaTarefaConcluidaController (req, res){
    const { id } = req.body;
    tarefa = marcaTarefaConcluida.execute(id);
    return res.status(200).json('Tarefa concluida com sucesso!!');
}


module.exports = { marcaTarefaConcluidaController }