export default async function Produtos() {
  await new Promise((xablau) => setTimeout(xablau, 3000));

  // throw new Error("produto não encontrado");

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        <li>Produto A</li>
        <li>Produto B</li>
        <li>Produto C</li>        
      </ul>
    </div>
  )
}