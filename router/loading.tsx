export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

        {/* Texto animado */}
        <p className="text-lg font-medium text-gray-700 animate-pulse">
          Carregando ...
        </p>
      </div>
    </div>
  );
}
