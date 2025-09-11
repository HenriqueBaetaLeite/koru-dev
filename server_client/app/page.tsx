import ClientBox from "./ClientComponent";

export default async function Page() {
  const serverTime = new Date().toISOString();

  return (
    <main className="text-black p-8 font-sans min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-8">
        Diferença entre Server e Client Components
      </h1>

      <div className="border-4 border-blue-600 bg-blue-100 rounded-2xl p-6 mb-8 shadow-md">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          🔵 Server Component
        </h2>
        <p>
          Este conteúdo foi <b>gerado no servidor</b> em:
        </p>
        <p className="font-bold text-lg mt-2">{serverTime}</p>
      </div>

      <ClientBox />
    </main>
  );
}
