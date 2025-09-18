"use client";

import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";

const buttonGreen =
  "px-2 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600";

const buttonRed =
  "px-2 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [tarefas, setTarefas] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchTarefas() {
    try {
      setLoading(true);
      const res = await fetch("/api/todos");
      if(!res.ok) throw new Error("Erro ao buscar tarefas");
      const data = await res.json();
      setTarefas(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTarefas();
  }, []);

  function handleAdd(novaTarefa: Todo) {
    setTarefas((prevState) => [...prevState, novaTarefa]);
  }

  async function deleteTodo(id: number) {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if(res.ok) {
      setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
    }
  }

  async function toggleTodo(id: number) {
    const res = await fetch(`/api/todos/${id}`, { method: "PUT" })
    const updated = await res.json();
    if (res.ok) {
      setTarefas((prev) => prev.map((tarefa) => tarefa.id === id ? updated : tarefa))
    }
  }

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <ul className="space-y-4">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span className={tarefa.completed ? "line-through text-gray-400" : "" } >
              {tarefa.text}
             </span>

            <div className="flex gap-2">
              <button onClick={() => toggleTodo(tarefa.id)} className={buttonGreen}>
                {tarefa.completed ? "Desfazer" : "Concluir"}
              </button>
              <button onClick={() => deleteTodo(tarefa.id)} className={buttonRed}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
