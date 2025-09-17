export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, text: "Estudar Next.js", completed: false },
  { id: 2, text: "Fazer exercício", completed: true },
];

export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  const newTodo: Todo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  return newTodo;
}

export function updateTodo(id: number) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  return todos.find((t) => t.id === id);
}

export function deleteTodo(id: number) {
  todos = todos.filter((t) => t.id !== id);
  return true;
}
