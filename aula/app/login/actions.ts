'use server';

import { findUserByCredentials } from '../_lib/users';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(_prevState, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const email = formData.get('email')?.toString();
  const senha = formData.get('senha')?.toString();

  if (!senha || !email) return { message: "Campos não podem ser vazios", sucesso: false }

  if (!email.includes('@')) return { message: "Email inválido", sucesso: false }

  if (senha.length < 6) {
    return { message: "A senha muita curta", sucesso: false }
  }

  const user = findUserByCredentials(email, senha);

  if (!user) return { message: "Credenciais inválidas", sucesso: false }

  const cookieStore = await cookies();
  cookieStore.set("user", JSON.stringify({ nome: user.nome, email: user.email }),
    {
      path: '/',
      httpOnly: true,
      maxAge: 30,
    }
  )

  redirect('/dashboard')

}