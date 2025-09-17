'use client';
import { useActionState } from 'react';

import { loginAction} from './actions';

const inputClassName =
  "w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none";

export default function Login() {
  const [state, formAction, isPending] = useActionState(loginAction, { message: "", sucesso: false });
  console.log('linha 8', state);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800"> Login Form</h1>

        <input
          type='text'
          name='email'
          className={inputClassName}
        />

        <input
          type="password"
          name="senha"
          className={inputClassName}
        />

        <button
          type='submit'
        >
          {isPending ? 'Entrando ...' : 'Entrar'}
        </button>

        {state?.message && (
          <p>{state?.message}</p>
        )}

      </form>
    </div>
  )
}
