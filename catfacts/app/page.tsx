import FactCard from "./_components/FactCard";
import { fetchCatFacts } from "./_lib/fetchCatFacts";
import CatList from "./CatList";

export default async function HomePage() {
  const facts = await fetchCatFacts(10); // revalidate default: 120s
  
  return (
    <main className="mx-auto max-w-xl p-6 space-y-4 text-black">
      <h1 className="text-2xl font-bold text-center">Cat Facts (Server)</h1>

      {/* {facts.map((fact, index) => (
        <FactCard key={index} fact={fact.fact} />
      ))} */}

      {/* Client Component recebe todos os facts via props */}
      {/* Interatividade (filtro) acontecerá apenas no cliente */}
      <CatList initialFacts={facts} />
    </main>
  );
}
