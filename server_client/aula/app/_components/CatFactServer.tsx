import CatFactClient from "./CatFactClientCard";

export default async function CatFactServer() {
  try {
    const response = await fetch("https://catfact.ninja/facts?limit=7", {
      next: { revalidate: 60 },
    });

    const data = await response.json();
    const catFacts = data.data;

    return (
      <div className="m-4 p-4 bg-blue-100 text-black rounded">
        <h2>Server Component</h2>

        <CatFactClient catFacts={catFacts} />
      </div>
    );
  } catch {
    return (
      <p className="font-bold text-lg">
        Não foi possível carregar o fato do gato.
      </p>
    );
  }
}
