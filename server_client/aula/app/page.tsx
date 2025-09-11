import Server from './_components/CatFactServer';
import CatFactClient from './_components/CatFactClient';

export default function Home() {
  return (
    <main className="p-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6">Server vs Client Components</h1>

      {/* Server Component */}
      <Server />

      {/* Client Component */}
      {/* <CatFactClient /> */}

    </main>
  )
}
