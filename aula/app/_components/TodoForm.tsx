"use client";
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

const buttonClassName =
  "bg-blue-500 text-white px-4 rounded disabled:opacity-50 cursor-pointer hover:bg-blue-600";

export default function TodoForm({ onAdd } : { onAdd: (todo: Todo) => void }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: { "Content-Type": "application/json" },
      });

      if(!res.ok) throw new Error("Erro ao adicionar tarefa");

      const novaTarefa = await res.json();

      onAdd(novaTarefa);

      setText("");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa ..."
      />
      {/* {error && <p>{error}</p>} */}
      <button type="submit" className={buttonClassName}>
        {loading ? "Adicionando ..." : "Adicionar"}
      </button>
    </form>
  );
}
