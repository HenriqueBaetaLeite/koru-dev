"use server";

export async function addTodoAction(_prevState: any, formData: FormData) {
  const text = formData.get("text")?.toString() || "";
  if (!text) return { error: "Texto obrigatório" };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    return { error: "Erro ao criar tarefa" };
  }

  const todo = await res.json();
  return { todo };
}

export async function toggleTodoAction(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
    method: "PUT",
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function deleteTodoAction(id: number) {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });
  return true;
}
