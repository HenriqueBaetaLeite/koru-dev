// import { getTodos } from '../../../lib/todos';
import { getTodos, addTodo } from '@/lib/todos';
import { NextResponse } from 'next/server';

export async function GET() {
  const tarefas = getTodos();
  return NextResponse.json(tarefas, { status: 200 });
}

export async function POST(request: Request) {
  const { text } = await request.json();
  if(!text) {
    return NextResponse.json({ error: "Texto obrigatório" }, { status: 400 });
  }
  const novaTarefa = addTodo(text);
  return NextResponse.json(novaTarefa, { status: 201 });
}
