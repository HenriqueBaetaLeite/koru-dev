'use client';
import { useState } from 'react';

type Props = {
  catFacts: { length: number, fact: string }[];
};

export default function CatCard({ catFacts }: Props) {
  const [query, setQuery] = useState("");
  const filtered = catFacts.filter((catFact) => (
    catFact.fact.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <section>
      <input
      className='border p-2 rounded-2xl bg-amber-200'
        type="text"
        placeholder='Pesquise ...'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div>
        {filtered.map((fact) => (
          <p key={fact.length} className='bg-amber-50 text-center text-sm text-gray-800 border rounded p-2 m-4'>
            {fact.fact}
          </p>
        ))}

        {!filtered.length && <p>Nada foi encontrado</p>}
        
      </div>
    </section>
  )
}