"use client";
import { useActionState } from "react";
import { addTodoAction } from "../_actions/todoActions";
import {Todo} from '../../lib/todos';

export default function TodoForm({ onAdd }: { onAdd: (todo: Todo) => void }) {
  const [state, formAction, isPending] = useActionState(addTodoAction, {
    error: null,
    todo: null,
  });

  if (state?.todo) {
    onAdd(state.todo);
    state.todo = null;
  }

  return (
    <form action={formAction} className="flex gap-2 mb-4">
      <input
        name="text"
        className="border p-2 flex-1 rounded"
        placeholder="Digite uma tarefa..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded disabled:opacity-50 cursor-pointer hover:bg-blue-600"
        disabled={isPending}
      >
        {isPending ? "Adicionando..." : "Adicionar"}
      </button>
      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
}
