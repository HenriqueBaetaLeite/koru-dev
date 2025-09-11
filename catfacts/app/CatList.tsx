'use client';

import { useState } from "react";
import FactCard from "./_components/FactCard";

type Props = {
  initialFacts: { id: string; fact: string }[];
};

export default function CatList({ initialFacts }: Props) {
  const [query, setQuery] = useState("");
  const filtered = initialFacts.filter((f) =>
    f.fact.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="mt-8 text-black">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 w-full mb-4 bg-amber-200 rounded-2xl"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-2">
        {filtered.map((fact) => (
          <FactCard key={fact.id} fact={fact.fact} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-300">No facts found.</p>
        )}
      </div>
    </section>
  );
}
