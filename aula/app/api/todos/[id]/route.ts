import { NextResponse } from "next/server";
import { updateTodo, deleteTodo } from '@/lib/todos';

export async function PUT(_request: Request, { params } : { params: { id: string }}) {
  const { id } = await params;

  const updated = updateTodo(parseInt(id));
  if(!updated) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params } : { params: { id: string }}) {
  const { id } = await params;
  deleteTodo(parseInt(id));
  return NextResponse.json({ success: true});
}
