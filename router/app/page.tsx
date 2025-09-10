export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Título */}
      <h1 className="text-4xl font-bold text-amber-400 text-center mb-8">
        Bem-vindo ao Meu Aplicativo Incrível
      </h1>

      {/* Cards de destaque */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-amber-400">Dashboard</h2>
          <p className="text-gray-100">
            Veja suas estatísticas, acompanhe métricas importantes e tenha uma visão completa do seu aplicativo.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-amber-400">Configurações</h2>
          <p className="text-gray-100">
            Ajuste suas preferências, configure notificações e personalize sua experiência de uso do app.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-amber-400">Suporte</h2>
          <p className="text-gray-100">
            Tire dúvidas, acesse tutoriais e entre em contato com nosso suporte quando precisar de ajuda.
          </p>
        </div>
      </div>
    </div>
  );
}
