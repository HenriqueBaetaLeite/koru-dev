// app/api/todos/route.ts
import { NextResponse } from "next/server";
import { getTodos, addTodo } from "@/lib/todos";

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request: Request) {
  const { text } = await request.json();
  if (!text) {
    return NextResponse.json({ error: "Texto obrigatório" }, { status: 400 });
  }
  const newTodo = addTodo(text);
  return NextResponse.json(newTodo, { status: 201 });
}
