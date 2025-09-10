export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Título */}
      <h1 className="text-3xl font-bold text-amber-400">
        Visão Geral do Dashboard
      </h1>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Usuários</h2>
          <p className="text-gray-100 text-2xl">120</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Vendas</h2>
          <p className="text-gray-100 text-2xl">75</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Notificações</h2>
          <p className="text-gray-100 text-2xl">12</p>
        </div>
      </div>
    </div>
  );
}
