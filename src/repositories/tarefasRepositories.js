const database = require("../infra/database");
const Task = require("../models/taskModel");


class tarefasRepositories {

    findAll(){
        return database;
    }

    createTask(titulo_tarefa, descricao_tarefa, prazo, status){
        const newTask = new Task(titulo_tarefa, descricao_tarefa, prazo, status);
        database.push(newTask);
    }

}

module.exports = { tarefasRepositories }