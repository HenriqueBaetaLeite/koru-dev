import { redirect } from "next/navigation";
import React from "react";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    "use server"; // Marcar a função como Server Action

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "user@example.com" && password === "password") {
      redirect("/dashboard");
    } else {
      redirect("/login?error=true");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Faça seu Login
        </h2>
        <form action={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="emailInput"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="passwordInput"
              className="block text-gray-700 font-medium mb-1"
            >
              Senha
            </label>
            <input
              type="password"
              id="passwordInput"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          © 2025 Minha Empresa. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
