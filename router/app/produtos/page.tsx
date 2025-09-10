// app/produtos/page.tsx
export default async function Produtos() {
  // Simulando um carregamento de 3s
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        <li>Produto A</li>
        <li>Produto B</li>
        <li>Produto C</li>
      </ul>
    </div>
  );
}
