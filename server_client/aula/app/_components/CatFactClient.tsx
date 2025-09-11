"use client";
import { useState, useEffect } from "react";
type CatFact = {
  fact: string;
  length: number;
};

export default function CatFactClient() {
  const [catFact, setCatFact] = useState<CatFact | null>(null);

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setCatFact(data));
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="m-4 p-4 bg-blue-100 text-black rounded">
      <h1>Client Component</h1>
      <p>{catFact?.fact}</p>
      <button
        className="mt2- px-3 py-1 bg-green-500 text-white rounded"
        // onClick={() => fetchCatFact()}
        onClick={fetchCatFact}
      >
        Novo Fato
      </button>
    </div>
  );
}
