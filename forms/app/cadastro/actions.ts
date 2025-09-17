"use server";

import { redirect } from "next/navigation";
import { addUser, findUserByEmail } from "../_lib/users";

export async function cadastroAction(_prevState: { sucesso: boolean, message: string }, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const nome = formData.get("nome")?.toString();
  const email = formData.get("email")?.toString();
  const senha = formData.get("senha")?.toString();

  if(!nome || !email || !senha) return { sucesso: false, message: "Campos não podem ser em branco" };
  
  if (!email.includes("@")) return { sucesso: false, message: "E-mail inválido" };
  if (senha.length < 6) return { sucesso: false, message: "Senha muito curta" };
  

  if (findUserByEmail(email)) return { sucesso: false,  message: "E-mail já cadastrado" };

  addUser({ nome, email, senha });

  redirect("/login");
}
