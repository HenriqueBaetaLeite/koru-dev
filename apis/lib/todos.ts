// lib/todos.ts
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, text: "Estudar Next.js", completed: false },
  { id: 2, text: "Fazer exercício", completed: true },
];

// Funções utilitárias
export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

export function updateTodo(id: number) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
);
  return todos.find((t) => t.id === id);
}

export function deleteTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
}
