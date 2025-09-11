// app/page.tsx
import React from 'react';
import CatFactServer from './_components/CatFactServer';
import CatFactClient from './_components/CatFactClient';

export default function HomePage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Server vs Client Components</h1>

      {/* Server Component */}
      <CatFactServer />

      {/* Client Component */}
      <CatFactClient />
    </main>
  );
}
