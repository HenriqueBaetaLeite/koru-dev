"use client";
import { useActionState } from "react";
import { ClipLoader } from "react-spinners";
import { cadastroAction } from "./actions";

const inputClassName =
  "w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none";

export default function CadastroPage() {
  const [state, formAction, isPending] = useActionState(cadastroAction, {
    sucesso: false,
    message: "",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
      <form
        action={formAction}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Cadastro
        </h1>

        <input name="nome" placeholder="Nome" className={inputClassName} />
        <input name="email" placeholder="E-mail" className={inputClassName} />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          className={inputClassName}
        />

        <button
          type="submit"
          disabled={isPending}
          className={`cursor-pointer w-full rounded-lg bg-green-600 py-2 text-white font-medium transition-colors ${
            isPending
              ? "opacity-60 cursor-not-allowed"
              : "hover:bg-green-700 active:bg-green-800"
          }`}
        >
          {isPending ? <ClipLoader /> : "Cadastrar"}
        </button>

        {state.message && (
          <p className="text-center text-sm font-medium text-red-600">
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
