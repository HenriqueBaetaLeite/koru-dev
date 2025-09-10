"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Retrieve() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você chamaria sua API de recuperação de senha
    console.log("Enviando link de recuperação para:", email);
    setSuccess(true);
    redirect('/');
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Recuperar Senha
        </h2>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-600"
              >
                Digite seu e-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Enviar link de recuperação
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600">
            ✅ Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha.
          </div>
        )}
      </div>
    </main>
  );
}
