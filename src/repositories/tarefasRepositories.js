const { DateTime } = require('luxon');
const database = require("../infra/database");
const Task = require("../models/taskModel");
const date = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
const status = "pendente";

class tarefasRepositories {

    findAll(){
        return database;
    }

    createTask( titulo_tarefa, descricao_tarefa, prazo){
        let id = database.length + 1 ;
        const newTask = new Task(id, date, titulo_tarefa, descricao_tarefa, prazo, status);
        database.push(newTask);
        return database;
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
            console.log('erro no mark done task/ repositories')
        };
    }

    unmarkDoneTask(id){
        const tarefa = database.find(tarefa => tarefa.id === id)
        if( tarefa ){
            tarefa.status = "pendente"
            delete tarefa.data_conclusao;
        }else{
            console.log('erro no unmark done task/ repositories')
        };
    }

    filterDoneTasks(){
        let concluidas = [];

        database.forEach(( task ) =>{
            if( task.status === "concluida"){
                concluidas.push(task)
            }
        })
        return concluidas

    }

    filterUnDoneTasks(){
        let pendentes = [];

        database.forEach(( task ) =>{
            if( task.status === "pendente"){
                pendentes.push(task)
            }
        })
        return pendentes

    }


}

module.exports = { tarefasRepositories }