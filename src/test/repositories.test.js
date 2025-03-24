const { tarefasRepositories } = require('../repositories/tarefasRepositories');

const mockDatabase = [
  { id: 1, titulo_tarefa: "Tarefa 1", status: "pendente" },
  { id: 2, titulo_tarefa: "Tarefa 2", status: "concluida" }
];

const repo = new tarefasRepositories();
repo.findAll = jest.fn(() => mockDatabase);

describe("Testes do tarefasRepositories", () => {
  
  it("Deve retornar todas as tarefas", () => {
    const tasks = repo.findAll();
    expect(tasks).toHaveLength(2);
    expect(tasks[0].titulo_tarefa).toBe("Tarefa 1");
  });

  it("Deve criar uma nova tarefa", () => {
    repo.createTask = jest.fn((titulo, descricao, prazo) => {
      const novaTarefa = { id: 3, titulo_tarefa: titulo, descricao_tarefa: descricao, prazo, status: "pendente" };
      mockDatabase.push(novaTarefa);
      return mockDatabase;
    });

    const updatedDB = repo.createTask("Nova Tarefa", "Descrição Nova", "20/03/2024");
    expect(updatedDB).toHaveLength(3);
    expect(updatedDB[2].titulo_tarefa).toBe("Nova Tarefa");
  });

  it("Deve marcar uma tarefa como concluída", () => {
    repo.markDoneTask = jest.fn(id => {
      const tarefa = mockDatabase.find(task => task.id === id);
      if (tarefa) {
        tarefa.status = "concluida";
      }
    });

    repo.markDoneTask(1);
    expect(mockDatabase[0].status).toBe("concluida");
  });

  it("Deve encontrar uma tarefa pelo ID", () => {
    repo.findById = jest.fn(id => mockDatabase.find(task => task.id === id));
  
    const tarefa = repo.findById(1);
    expect(tarefa).toBeDefined();
    expect(tarefa.titulo_tarefa).toBe("Tarefa 1");
  });
  
  it("Deve reverter uma tarefa para pendente", () => {
    repo.unmarkDoneTask = jest.fn(id => {
      const tarefa = mockDatabase.find(task => task.id === id);
      if (tarefa) {
        tarefa.status = "pendente";
        delete tarefa.data_conclusao;
      }
    });
  
    repo.unmarkDoneTask(2);
    expect(mockDatabase[1].status).toBe("pendente");
    expect(mockDatabase[1].data_conclusao).toBeUndefined();
  });  

  it("Deve retornar undefined ao buscar uma tarefa inexistente", () => {
    repo.findById = jest.fn(id => mockDatabase.find(task => task.id === id));
  
    const tarefa = repo.findById(999);
    expect(tarefa).toBeUndefined();
  });
  
  it("Não deve alterar nada ao marcar como concluída uma tarefa inexistente", () => {
    repo.markDoneTask = jest.fn(id => {
      const tarefa = mockDatabase.find(task => task.id === id);
      if (tarefa) {
        tarefa.status = "concluida";
        tarefa.data_conclusao = "15/03/2024 18:00:00";
      }
    });
  
    const originalDB = [...mockDatabase]; 
    repo.markDoneTask(999); 
    expect(mockDatabase).toEqual(originalDB); 
  });
  
  it("Deve retornar apenas as tarefas concluídas", () => {
    repo.filterDoneTasks = jest.fn(() => mockDatabase.filter(task => task.status === "concluida"));
  
    const concluidas = repo.filterDoneTasks();
    expect(concluidas).toHaveLength(1);
    expect(concluidas[0].status).toBe("concluida");
  });
  
  it("Deve retornar apenas as tarefas pendentes", () => {
    repo.filterUnDoneTasks = jest.fn(() => mockDatabase.filter(task => task.status === "pendente"));
  
    const pendentes = repo.filterUnDoneTasks();
    expect(pendentes).toHaveLength(2);
    expect(pendentes[0].status).toBe("pendente");
  });
  
  it("Deve criar tarefas com IDs sequenciais", () => {
    repo.createTask = jest.fn((titulo, descricao, prazo) => {
      const novoId = mockDatabase.length + 1;
      const novaTarefa = { id: novoId, titulo_tarefa: titulo, descricao_tarefa: descricao, prazo, status: "pendente" };
      mockDatabase.push(novaTarefa);
      return novaTarefa;
    });
  
    const novaTarefa = repo.createTask("Tarefa Nova", "Descrição", "20/03/2024");
    expect(novaTarefa.id).toBe(mockDatabase.length);
  });
  

});
