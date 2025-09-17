import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📋 Lista de Tarefas</h1>
      <TodoList />
    </main>
  );
}
