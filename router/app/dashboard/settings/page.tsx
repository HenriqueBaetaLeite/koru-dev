'use client';

import React, { useState } from "react";

export default function SettingsComponent() {
  const [username, setUsername] = useState("user");
  const [email, setEmail] = useState("user@example.com");
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode chamar uma API Next.js para salvar as configurações
    alert("Configurações salvas!");
  };

  return (
    <div className="max-w-3xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-amber-400">Configurações</h2>

      <form onSubmit={handleSave} className="space-y-4">
        {/* Nome de usuário */}
        <div>
          <label htmlFor="username" className="block mb-1 font-semibold">
            Nome de usuário
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>

        {/* Notificações */}
        <div className="flex items-center space-x-2">
          <input
            id="notifications"
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-5 w-5 text-amber-400 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-amber-400"
          />
          <label htmlFor="notifications" className="font-semibold">
            Receber notificações
          </label>
        </div>

        {/* Botão Salvar */}
        <button
          type="submit"
          className="bg-amber-400 text-gray-900 font-bold px-4 py-2 rounded hover:bg-amber-500 transition-colors"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
