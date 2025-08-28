export default function ProductCard() {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src="<https://via.placeholder.com/300x200>" alt="Product Image" />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-800">Nome do Produto</h2>
        <p className="text-gray-700 text-base mb-4">
          Uma breve descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">$29.99</span>
          <span className="text-sm text-green-600 font-semibold">Em Estoque</span>
        </div>
        <button className="w-full bg-baeta text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
