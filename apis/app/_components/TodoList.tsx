"use client";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchTodos() {
    try {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Erro ao buscar tarefas");
      const data = await res.json();
      setTodos(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function toggleTodo(id: number) {
    const res = await fetch(`/api/todos/${id}`, { method: "PUT" });
    if (res.ok) {
      const updated = await res.json();
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updated : todo))
      );
    }
  }

  async function deleteTodo(id: number) {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if (res.ok) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  }

  function handleAdd(newTodo: Todo) {
    setTodos((prev) => [...prev, newTodo]);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p>Carregando tarefas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <TodoForm onAdd={handleAdd} />

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer"
              >
                {todo.completed ? "Desfazer" : "Concluir"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
