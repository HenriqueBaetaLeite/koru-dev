"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { findUserByCredentials } from "../_lib/users";

export async function loginAction(_prevState: { sucesso: boolean, message: string }, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const email = formData.get("email")?.toString();
  const senha = formData.get("senha")?.toString();

  if (!email || !senha) return { sucesso: false, message: "Campos não podem ser em branco" };
  if (!email.includes("@")) return { sucesso: false, message: "E-mail inválido" };

  if (senha.length < 6) return { sucesso: false, message: "Senha muito curta" };

  // simula chamada de API
  // if (email === "teste@exemplo.com" && senha === "123456") {
  //   const cookieStore = await cookies();
  //   cookieStore.set("user", JSON.stringify({ nome: user.nome, email: user.email }), {
  //     path: "/",
  //     httpOnly: true,
  //     maxAge: 30,
  //   });
  //   redirect('/dashboard');
  // }
  // return { sucesso: false, message: "Credenciais inválidas" };

  const user = findUserByCredentials(email, senha);

  if (!user) return { sucesso: false, message: "Credenciais inválidas" };

  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify({ nome: user.nome, email: user.email }), {
    path: "/",
    httpOnly: true,
    maxAge: 30,
  });

  redirect('/dashboard');
}
