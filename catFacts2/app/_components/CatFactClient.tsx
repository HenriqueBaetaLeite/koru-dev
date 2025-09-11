'use client';

import React, { useEffect, useState } from 'react';

type CatFact = {
  fact: string;
  length: number;
};

export default function CatFactClient() {
  const [catFact, setCatFact] = useState<CatFact | null>(null);

  const fetchCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setCatFact(data));
  };

  useEffect(() => {
    fetchCatFact();
    console.log('Client Component está rodando no navegador'); // aparece no console do browser
  }, []);

  if (!catFact) return <p className='animate-pulse'>Carregando...</p>;

  return (
    <div className="p-4 bg-green-100 rounded-md shadow-md text-black">
      <h2 className="font-bold text-lg mb-2">Client Component</h2>
      <p>{catFact.fact}</p>
      <small>Length: {catFact.length}</small>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
        onClick={fetchCatFact}
      >
        Atualizar fato
      </button>
    </div>
  );
}
