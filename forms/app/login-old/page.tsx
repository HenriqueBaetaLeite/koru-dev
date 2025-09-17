"use client";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const inputClassName =
  "w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none";

export default function LoginTradicional() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // validação simples
    if (!email || !senha) {
      setMsg("Campos vazios!!");
      setIsLoading(false);
      return;
    }
    if (!email.includes("@")) {
      setMsg("E-mail inválido");
      setIsLoading(false);
      return;
    }

    if (senha.length < 6) {
      setMsg("Senha muito curta");
      setIsLoading(false);
      return;
    }

    // simula chamada de API
    if (email === "teste@exemplo.com" && senha === "123456") {
      setMsg("Login realizado!");
    } else {
      setMsg("Credenciais inválidas.");
    }
    setIsLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className={inputClassName}
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          className={inputClassName}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer w-full rounded-lg bg-blue-600 py-2 text-white font-medium transition-colors"
        >
          {isLoading ? <ClipLoader /> : "Entrar"}
        </button>
        {msg && <p className="text-red-500">{msg}</p>}
      </form>
    </div>
  );
}
