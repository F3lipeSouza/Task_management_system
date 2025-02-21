

class Task{
    constructor(id, data_criacao, titulo_tarefa, descricao_tarefa, prazo, status){
        this.id = id;
        this.data_criacao = data_criacao;
        this.titulo_tarefa = titulo_tarefa;
        this.descricao_tarefa = descricao_tarefa;
        this.prazo = prazo;
        this.status = status
    }
}

module.exports = Task