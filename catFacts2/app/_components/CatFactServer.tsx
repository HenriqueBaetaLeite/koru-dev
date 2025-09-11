// components/CatFactServer.tsx
import React from 'react';

type CatFact = {
  fact: string;
  length: number;
};

export default async function CatFactServer() {
  try {
    const res = await fetch('https://catfact.ninja/fact', { next: { revalidate: 60 } });
    const data = await res.json();
    const catFact: CatFact = data;

    console.log('Server Component renderizou no servidor'); // aparece no terminal

    return (
      <div className="p-4 bg-blue-100 rounded-md shadow-md mb-4 text-black">
        <h2 className="font-bold text-lg mb-2">Server Component</h2>
        <p>{catFact.fact}</p>
        <small>Length: {catFact.length}</small>
      </div>
    );
  } catch (err) {
    return <p>Não foi possível carregar o fato do gato.</p>;
  }
}
