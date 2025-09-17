"use client";
import { ClipLoader } from "react-spinners";
import { useActionState } from "react";
import { loginAction } from "./actions";

const inputClassName =
  "w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none";

const buttonClassName =
  "cursor-pointer w-full rounded-lg bg-blue-600 py-2 text-white font-medium transition-colors";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, {
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
          Login
        </h1>

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
          className={`${buttonClassName} ${
            isPending
              ? "opacity-60 cursor-not-allowed"
              : "hover:bg-blue-700 active:bg-blue-800"
          }`}
        >
          {isPending ? <ClipLoader /> : "Entrar"}
        </button>

        {state.message && (
          <p className={`text-center text-sm font-medium text-red-600`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
