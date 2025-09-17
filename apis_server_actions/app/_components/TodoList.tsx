"use client";
import { useEffect, useState } from "react";
import { toggleTodoAction, deleteTodoAction } from "../_actions/todoActions";
import TodoForm from "./TodoForm";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodos() {
    const res = await fetch("/api/todos", { cache: "no-store" });
    const data = await res.json();
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  function handleAdd(newTodo: Todo) {
    setTodos((prev) => [...prev, newTodo]);
  }

  async function toggleTodo(id: number) {
    const updated = await toggleTodoAction(id);
    if (updated) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? updated : t))
      );
    }
  }

  async function deleteTodo(id: number) {
    await deleteTodoAction(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
              >
                {todo.completed ? "Desfazer" : "Concluir"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
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
