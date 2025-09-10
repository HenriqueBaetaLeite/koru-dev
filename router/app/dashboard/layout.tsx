import React from 'react';
import Link from 'next/link';

const linkClass = "block px-3 py-2 rounded hover:bg-amber-500 hover:text-gray-900 transition-colors";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-amber-400">Navegação do Painel</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className={linkClass}
            >
              Visão Geral
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className={linkClass}
            >
              Configurações
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-900">{children}</main>
    </div>
  );
}
