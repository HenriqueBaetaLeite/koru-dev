export default function FactCard({ fact }: { fact: string }) {
  return (
    <article className="p-4 border rounded shadow-sm bg-gray-300">
      {fact}
    </article>
  );
}
