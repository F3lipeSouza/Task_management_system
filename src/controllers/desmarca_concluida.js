const marcaTarefaNaoConcluida = require('../useCases/desmarca_concluida')

function marcaTarefaNaoConcluidaController (req, res){
    const { id } = req.body;
    tarefa = marcaTarefaNaoConcluida.execute(id);
    return res.status(200).json('Tarefa adicionada como pendente!!');
}


module.exports = { marcaTarefaNaoConcluidaController }