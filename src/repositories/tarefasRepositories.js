const { DateTime } = require('luxon');
const database = require("../infra/database");
const Task = require("../models/taskModel");
const date = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');


class tarefasRepositories {

    findAll(){
        return database;
    }

    createTask( titulo_tarefa, descricao_tarefa, prazo, status ){
        let id = database.length + 1 ;
        const newTask = new Task(id, date, titulo_tarefa, descricao_tarefa, prazo, status);
        database.push(newTask);
    }

    findById(id){
        return database.find(tarefa => tarefa.id === id)
    }

    markDoneTask(id){
        const tarefa = database.find(tarefa => tarefa.id === id)
        if( tarefa ){
            tarefa.status = "concluida"
            tarefa.data_conclusao = date;
        }else{
            console.log('deu não')
        };
    }

    unmarkDoneTask(id){
        const tarefa = database.find(tarefa => tarefa.id === id)
        if( tarefa ){
            tarefa.status = "pendente"
            delete tarefa.data_conclusao;
        }else{
            console.log('deu não')
        };
    }


}

module.exports = { tarefasRepositories }